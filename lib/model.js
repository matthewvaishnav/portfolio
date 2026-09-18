import * as THREE from 'three'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/v1/decoders/'

export function loadGLTFModel(
  scene,
  glbPath,
  {
    receiveShadow = true,
    castShadow = true,
    name = 'model',
    targetY = 0
  } = {}
) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()

    dracoLoader.setDecoderConfig({ type: 'js' })
    dracoLoader.setDecoderPath(DRACO_DECODER_PATH)
    loader.setDRACOLoader(dracoLoader)

    loader.load(
      glbPath,
      gltf => {
        const object = gltf.scene
        const bounds = new THREE.Box3().setFromObject(object)
        const center = bounds.getCenter(new THREE.Vector3())

        object.name = name
        object.position.set(-center.x, targetY - center.y, -center.z)

        object.traverse(child => {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })

        scene.add(object)
        dracoLoader.dispose()
        resolve(object)
      },
      undefined,
      error => {
        dracoLoader.dispose()
        reject(error)
      }
    )
  })
}

export function disposeObject3D(object) {
  object.traverse(child => {
    if (!child.isMesh) return

    child.geometry?.dispose()

    const materials = Array.isArray(child.material)
      ? child.material
      : [child.material]

    materials.filter(Boolean).forEach(material => {
      Object.values(material).forEach(value => {
        if (value?.isTexture) value.dispose()
      })
      material.dispose()
    })
  })
}
