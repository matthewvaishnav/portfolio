import { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import {
  LaptopSceneContainer,
  LaptopSceneFallback,
  LaptopSceneSpinner
} from './laptop-scene-loader'

const LaptopScene = () => {
  const containerRef = useRef()
  const rendererRef = useRef()
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)
  const modelUrl = '/portfolio/laptop.glb'

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = rendererRef
    const { current: container } = containerRef

    if (container && renderer) {
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
  }, [])

  useEffect(() => {
    const { current: container } = containerRef
    if (!container) return undefined

    const scW = container.clientWidth
    const scH = container.clientHeight

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(scW, scH)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.domElement.setAttribute('aria-hidden', 'true')
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const scene = new THREE.Scene()
    const target = new THREE.Vector3(0, 12, 0)
    const initialCameraPosition = new THREE.Vector3(
      38 * Math.sin(0.5 * Math.PI),
      15,
      38 * Math.cos(0.5 * Math.PI)
    )

    const scale = scH * 0.0085 + 6.0
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      50000
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

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
    controls.autoRotate = false
    controls.enablePan = false
    controls.target.copy(target)

    let req = null

    const animate = () => {
      req = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    loadGLTFModel(scene, modelUrl, {
      receiveShadow: false,
      castShadow: false
    })
      .then(() => {
        animate()
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setFailed(true)
      })

    return () => {
      cancelAnimationFrame(req)
      controls.dispose()
      renderer.domElement.remove()
      renderer.dispose()
      rendererRef.current = null
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  if (failed) return <LaptopSceneFallback />

  return (
    <LaptopSceneContainer ref={containerRef}>
      {loading && <LaptopSceneSpinner />}
    </LaptopSceneContainer>
  )
}

export default LaptopScene
