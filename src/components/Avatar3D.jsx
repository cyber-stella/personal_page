import { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows, Html } from '@react-three/drei'
import * as THREE from 'three'

function Model() {
  const group = useRef()
  const [modelError, setModelError] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const { viewport } = useThree()

  // 将 useGLTF 移到 try 块外面，确保 hooks 调用顺序一致
  const { scene } = useGLTF('/personal_page/models/avatar.glb', true)

  // 改进鼠标交互效果
  useFrame((state) => {
    if (!group.current) return

    // 获取鼠标位置（归一化到 -1 到 1 的范围）
    const mouseX = state.mouse.x
    const mouseY = state.mouse.y

    // 计算头部旋转角度（调整系数使运动更明显）
    const targetRotationY = THREE.MathUtils.clamp(mouseX * 0.5, -0.5, 0.5)
    const targetRotationX = THREE.MathUtils.clamp(mouseY * -0.3, -0.3, 0.3)

    // 平滑插值（减小系数使运动更平滑）
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetRotationY,
      0.05
    )
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetRotationX,
      0.05
    )
  })

  // 添加初始位置
  useEffect(() => {
    if (group.current) {
      group.current.rotation.x = 0
      group.current.rotation.y = 0
    }
  }, [])

  try {
    return (
      <group 
        ref={group}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <primitive 
          object={scene} 
          scale={1.5}
          position={[0, 0, 0]}
        />
      </group>
    )
  } catch (error) {
    console.error('Model loading error:', error)
    return (
      <Html center>
        <div className="text-red-500">
          模型加载错误: {error.message}
          <br />
          请确保模型文件位于 public/models 目录下
        </div>
      </Html>
    )
  }
}

function Loader() {
  return (
    <Html center>
      <div className="text-gray-600 dark:text-gray-300">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 dark:border-gray-300"></div>
      </div>
    </Html>
  )
}

const Avatar3D = () => {
  return (
    <div className="w-[800px] h-[800px] relative">
      <Canvas
        camera={{ 
          position: [0, 0, 8],
          fov: 35,
          near: 0.1,
          far: 1000
        }}
        style={{ 
          background: 'transparent',
        }}
      >
        {/* 增强环境光照 */}
        <ambientLight intensity={4.0} />
        
        {/* 增强主光源 */}
        <directionalLight 
          position={[0, 1, 5]}  // 降低高度，更直接照射脸部
          intensity={5.0}       // 增加强度
          castShadow
        />
        
        {/* 加强面部专用光源 */}
        <spotLight 
          position={[0, 0.5, 4]}  // 更靠近脸部
          intensity={4.0}         // 增加强度
          angle={0.6}             // 扩大照射角度
          penumbra={0.3}          // 减小边缘柔和度使光照更集中
          color="#ffffff"
        />
        
        {/* 调整填充光 */}
        <directionalLight 
          position={[-2, 1, 3]}   // 调整位置更靠近脸部
          intensity={3.0}         // 增加强度
          color="#ffffff" 
        />
        
        <directionalLight 
          position={[2, 1, 3]}    // 调整位置更靠近脸部
          intensity={3.0}         // 增加强度
          color="#ffffff" 
        />
        
        {/* 增强顶部点光源 */}
        <pointLight 
          position={[0, 2, 3]}    // 降低高度
          intensity={3.0}         // 增加强度
          color="#ffffff"
          distance={10}           // 增加照射距离
        />

        {/* 加强下方补光 */}
        <pointLight 
          position={[0, -0.5, 3]} // 调整位置更靠近脸部
          intensity={2.0}         // 增加强度
          color="#ffffff"
          distance={8}            // 增加照射距离
        />

        <Suspense fallback={<Loader />}>
          <Model />
          <Environment 
            preset="city" 
            intensity={2.0}       // 增加环境光强度
          />
          <ContactShadows 
            position={[0, -1, 0]}
            opacity={0.25}        // 减小阴影强度
            scale={5}
            blur={2}
            far={2}
            resolution={512}
            color="#000000"
          />
        </Suspense>

        <OrbitControls 
          enabled={false}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/personal_page/models/avatar.glb')

export default Avatar3D 