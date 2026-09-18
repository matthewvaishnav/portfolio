import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { disposeObject3D, loadGLTFModel } from '../lib/model'
import {
  LaptopSceneContainer,
  LaptopSceneFallback,
  LaptopSceneSpinner
} from './laptop-scene-loader'

const MODEL_URL = '/portfolio/laptop.glb'
const TARGET_Y = 12
const CAMERA_DISTANCE = 38

const easeOutCubic = x => 1 - Math.pow(1 - x, 3)

const LaptopScene = () => {
  const containerRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    let animationFrame = 0
    let model = null
    let disposed = false
    let introFrame = 0

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.domElement.setAttribute('aria-hidden', 'true')
    renderer.domElement.style.display = 'block'
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const target = new THREE.Vector3(0, TARGET_Y, 0)
    const camera = new THREE.OrthographicCamera(-8, 8, 8, -8, 0.01, 50000)
    camera.position.set(CAMERA_DISTANCE, 15, 0)
    camera.lookAt(target)

    scene.add(new THREE.AmbientLight(0xffffff, 0.8))

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2)
    keyLight.position.set(10, 15, 10)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.6)
    fillLight.position.set(-10, 10, 5)
    scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.4)
    rimLight.position.set(0, 5, -10)
    scene.add(rimLight)

    const controls = new OrbitControls(camera, renderer.domElement)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    controls.target.copy(target)
    controls.enablePan = false
    controls.enableDamping = true
    controls.autoRotate = !reduceMotion
    controls.autoRotateSpeed = 0.75

    const resize = () => {
      const width = Math.max(container.clientWidth, 1)
      const height = Math.max(container.clientHeight, 1)
      const aspect = width / height
      const scale = height * 0.0085 + 6

      renderer.setSize(width, height, false)
      camera.left = -scale * aspect
      camera.right = scale * aspect
      camera.top = scale
      camera.bottom = -scale
      camera.updateProjectionMatrix()
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)
    resize()

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate)

      if (!reduceMotion && introFrame < 90) {
        introFrame += 1
        const progress = easeOutCubic(introFrame / 90)
        const angle = progress * Math.PI * 0.6
        camera.position.x = CAMERA_DISTANCE * Math.cos(angle)
        camera.position.z = CAMERA_DISTANCE * Math.sin(angle)
        camera.position.y = 15
        camera.lookAt(target)
      } else {
        controls.update()
      }

      renderer.render(scene, camera)
    }

    animate()

    loadGLTFModel(scene, MODEL_URL, {
      name: 'portfolio-laptop',
      targetY: TARGET_Y,
      receiveShadow: false,
      castShadow: false
    })
      .then(loadedModel => {
        if (disposed) {
          disposeObject3D(loadedModel)
          return
        }
        model = loadedModel
        setLoading(false)
      })
      .catch(() => {
        if (!disposed) {
          setLoading(false)
          setFailed(true)
        }
      })

    return () => {
      disposed = true
      window.cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      controls.dispose()

      if (model) {
        scene.remove(model)
        disposeObject3D(model)
      }

      renderer.dispose()
      renderer.forceContextLoss()

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  if (failed) return <LaptopSceneFallback />

  return (
    <LaptopSceneContainer ref={containerRef}>
      {loading && <LaptopSceneSpinner />}
    </LaptopSceneContainer>
  )
}

export default LaptopScene
