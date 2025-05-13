import { useEffect, useRef, useState } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Mesh } from "three";
import { cn } from "@/lib/utils";

interface ModelViewerProps {
  modelPath: string;
  className?: string;
  height?: string;
  backgroundColor?: string;
}

function Model({ modelPath }: { modelPath: string }) {
  const geometry = useLoader(STLLoader, modelPath);
  const meshRef = useRef<Mesh>(null);
  const { camera } = useThree();
  
  useEffect(() => {
    if (!meshRef.current) return;
    
    const boundingBox = geometry.boundingBox;
    if (boundingBox) {
      const center = boundingBox.getCenter(boundingBox.min.clone());
      meshRef.current.position.x = -center.x;
      meshRef.current.position.y = -center.y;
      meshRef.current.position.z = -center.z;
      
      const size = boundingBox.getSize(boundingBox.max.clone()).length();
      camera.position.set(0, 0, size * 2);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }, [geometry, camera]);

  return (
    <mesh ref={meshRef}>
      <primitive object={geometry} attach="geometry" />
      <meshStandardMaterial color="#d4af37" roughness={0.5} metalness={0.7} />
    </mesh>
  );
}

export function ModelViewer({
  modelPath,
  className,
  height = "500px",
  backgroundColor = "#f5f5f5"
}: ModelViewerProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={cn("relative w-full", className)} style={{ height }}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
      <Canvas className="w-full h-full" onCreated={() => setLoading(false)} style={{ background: backgroundColor }}>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.8} position={[10, 10, 5]} />
        <directionalLight intensity={0.5} position={[-10, -10, -5]} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Model modelPath={modelPath} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}
