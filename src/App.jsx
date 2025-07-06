import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Model } from './Model'
import { Navbar } from './Navbar'
import { HeroSection } from './HeroSection'
import './App.css'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section with text overlay */}
      <HeroSection />
      
      {/* 3D Background Scene */}
      <Canvas
        camera={{
          position: [-5, 5, 5],
          fov: 20
        }}
        shadows
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          castShadow
          intensity={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {/* Environment for reflections */}
        <Environment preset="apartment" />
        
        {/* Your 3D Model */}
        <Model />
        
        {/* Camera controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  )
}

export default App
