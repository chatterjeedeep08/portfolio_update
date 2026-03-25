import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei'

function FloatingCore() {
  return (
    <Float speed={1.8} rotationIntensity={1.1} floatIntensity={1.2}>
      <mesh scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#58f0ff"
          distort={0.35}
          speed={2.5}
          roughness={0.05}
          metalness={0.65}
          opacity={0.85}
          transparent
        />
      </mesh>
    </Float>
  )
}

function OrbitRings() {
  const groupRef = useRef(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.35
    }
  })

  return (
    <group ref={groupRef} rotation={[0.65, 0.15, 0]}>
      {[2.4, 3.2, 4].map((radius) => (
        <mesh key={radius} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.025, 24, 160]} />
          <meshStandardMaterial
            color={radius === 3.2 ? '#7c86ff' : '#7ef7d5'}
            transparent
            opacity={0.38}
            emissive={radius === 3.2 ? '#7c86ff' : '#7ef7d5'}
            emissiveIntensity={0.55}
          />
        </mesh>
      ))}
    </group>
  )
}

function Particles() {
  const pointsRef = useRef(null)
  const positions = useMemo(() => {
    const values = []
    for (let index = 0; index < 80; index += 1) {
      const spread = 8
      values.push((Math.random() - 0.5) * spread)
      values.push((Math.random() - 0.5) * spread)
      values.push((Math.random() - 0.5) * spread)
    }
    return new Float32Array(values)
  }, [])

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.04
      pointsRef.current.rotation.y += delta * 0.08
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#a8b5ff" size={0.055} sizeAttenuation transparent opacity={0.8} />
    </points>
  )
}

export default function OrbitalScene() {
  return (
    <Canvas dpr={[1, 1.8]}>
      <PerspectiveCamera makeDefault position={[0, 0, 7]} />
      <color attach="background" args={['transparent']} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 2]} intensity={1.2} />
      <FloatingCore />
      <OrbitRings />
      <Particles />
    </Canvas>
  )
}
