'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Box, Sphere } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function CameraModel() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Camera Body */}
      <Box args={[2, 1.2, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2d3748" />
      </Box>

      {/* Lens */}
      <Sphere args={[0.4, 16, 16]} position={[0.8, 0, 0.6]}>
        <meshStandardMaterial color="#1a202c" />
      </Sphere>

      {/* Viewfinder */}
      <Box args={[0.3, 0.3, 0.2]} position={[-0.5, 0.3, 0.5]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>

      {/* Flash */}
      <Box args={[0.2, 0.2, 0.1]} position={[-0.7, 0.2, 0.4]}>
        <meshStandardMaterial color="#e53e3e" />
      </Box>
    </group>
  )
}

export default function Camera3D() {
  return (
    <div className="w-full h-96">
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, 2, 5]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <CameraModel />
      </Canvas>
    </div>
  )
}