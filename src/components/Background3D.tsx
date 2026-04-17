import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Grid, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const SYMBOLS = ["{ }", "< />", "( )", "[ ]", ";", "const", "let", "AI", "0", "1", "&&", "||", "=>"];

function AnimatedCamera() {
  useFrame((state) => {
    // Calculate how far down the page the user has scrolled
    const scrollY = window.scrollY;
    // Handle cases where body might not be fully loaded
    const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight); 
    const scrollProgress = scrollY / maxScroll; // Normalizes scroll to 0.0 -> 1.0

    // Smoothly animate the camera zooming forward into the code through Lerp
    // Start at Z = 5 (top of page), glide all the way to Z = -20 (bottom of page)
    const targetZ = 5 - (scrollProgress * 25);
    
    // Optional: add a slight pan down as we scroll deeper into the grid
    const targetY = - (scrollProgress * 2);

    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
  });
  
  return null;
}

function FloatingCodeSymbols() {
  const group = useRef<THREE.Group>(null);

  // Generate random symbols stretched deep across the Z-axis
  const symbols = useMemo(() => {
    const items = [];
    for (let i = 0; i < 120; i++) {
      items.push({
        text: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        position: [
          (Math.random() - 0.5) * 50, // Spread widely across the X
          (Math.random() - 0.5) * 30, // Spread vertically (Y)
          Math.random() * -40 + 5     // Deep spread along Z, from +5 down to -35
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.5,
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          0
        ] as [number, number, number],
        color: Math.random() > 0.5 ? "#00e5ff" : "#ff00a0",
        speed: Math.random() * 0.5 + 0.2
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (group.current) {
      // Very slow global rotation to make the entire galaxy of symbols feel alive
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {symbols.map((sym, i) => (
        <Float
          key={i}
          position={sym.position}
          rotation={sym.rotation}
          speed={sym.speed}
          rotationIntensity={2}
          floatIntensity={2}
        >
          <Text
            fontSize={sym.scale}
            color={sym.color}
            fillOpacity={0.4}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.01}
            outlineColor={sym.color}
            outlineOpacity={0.8}
          >
            {sym.text}
          </Text>
        </Float>
      ))}
    </group>
  );
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-[#020205]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* Fog keeps the deep space distance obscured as we traverse */}
        <fog attach="fog" args={["#020205", 5, 25]} />
        <ambientLight intensity={0.5} />
        
        {/* Animated Camera Hook */}
        <AnimatedCamera />
        
        <Grid 
          position={[0, -10, -15]} // Shift the grid deeper so there's plenty of space to travel
          args={[60, 60]} 
          cellSize={1} 
          cellThickness={0.5} 
          cellColor="#1e293b" 
          sectionSize={5} 
          sectionThickness={1} 
          sectionColor="#00e5ff" 
          fadeDistance={40}
          fadeStrength={1}
        />

        {/* Ambient floating glowing data points */}
        <Sparkles count={400} scale={[40, 20, 40]} position={[0, 0, -10]} size={2} speed={0.4} opacity={0.3} color="#00e5ff" />
        <Sparkles count={400} scale={[40, 20, 40]} position={[0, 0, -10]} size={1.5} speed={0.6} opacity={0.2} color="#ff00a0" />

        <FloatingCodeSymbols />
      </Canvas>
    </div>
  );
};

export default Background3D;
