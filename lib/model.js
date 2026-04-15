import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

const draco = new DRACOLoader();
draco.setDecoderConfig({ type: 'js' });
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.setDRACOLoader( draco );

    console.log('Loading model from:', glbPath)

    loader.load(
      glbPath,
      gltf => {
        console.log('Model loaded successfully:', gltf)
        const obj = gltf.scene
        obj.name = 'dog'
        
        // Calculate bounding box BEFORE positioning
        const box = new THREE.Box3().setFromObject(obj)
        const center = box.getCenter(new THREE.Vector3())
        
        console.log('Model bounding box:', box)
        console.log('Model center:', center)
        console.log('Model size:', box.getSize(new THREE.Vector3()))
        
        // Center the model by offsetting by its calculated center
        obj.position.x = -center.x
        obj.position.y = 12 - center.y
        obj.position.z = -center.z
        
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        console.error('Error loading model:', error)
        reject(error)
      }
    )
  })
}
