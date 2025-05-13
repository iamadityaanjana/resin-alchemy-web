import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

type ModelViewerProps = {
  modelPath: string;
  className?: string;
  height?: string;
  rotation?: [number, number, number];
  cameraPosition?: [number, number, number];
}

// Fallback component to render when model fails to load
const ModelError = () => {
  return (
    <Html center>
      <div className="text-center p-4">
        <p className="text-red-500 font-semibold">Failed to load 3D model</p>
        <p className="text-sm text-gray-600 mt-2">Please try refreshing the page</p>
      </div>
    </Html>
  );
};

const Model = ({ modelPath, rotation = [0, 0, 0] }: { modelPath: string; rotation?: [number, number, number] }) => {
  const [error, setError] = useState<Error | null>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a default material with a nice finish for resin texture
  const material = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#D4AF37"), // Gold color
    metalness: 0.3,
    roughness: 0.2,
    clearcoat: 0.8,
    clearcoatRoughness: 0.2,
    reflectivity: 0.5,
  });
  
  // Use a try/catch with the useLoader to handle potential errors
  let geometry;
  try {
    geometry = useLoader(STLLoader, modelPath);
  } catch (err) {
    console.error("Failed to load STL:", err);
    setError(err as Error);
    return <ModelError />;
  }
  
  useEffect(() => {
    if (meshRef.current && geometry) {
      try {
        // Center the model
        geometry.center();
        
        // Get the current bounding box
        const boundingBox = new THREE.Box3().setFromObject(meshRef.current);
        const size = new THREE.Vector3();
        boundingBox.getSize(size);
        
        // Scale the model to fit within a 2x2x2 cube
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const scale = 2 / maxDim;
          meshRef.current.scale.set(scale, scale, scale);
        }
      } catch (err) {
        console.error("Error processing geometry:", err);
        setError(err as Error);
      }
    }
  }, [geometry]);

  if (error || !geometry) {
    return <ModelError />;
  }
  
  return (
    <mesh 
      ref={meshRef} 
      geometry={geometry} 
      material={material}
      rotation={[rotation[0], rotation[1], rotation[2]]}
      castShadow
      receiveShadow
    />
  );
};

// Loading component that shows while the model is loading
const ModelLoading = () => {
  return (
    <Html center>
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#D4AF37] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-2 text-sm text-gray-600">Loading 3D model...</p>
      </div>
    </Html>
  );
};

export function ModelViewer({ 
  modelPath, 
  className = "w-full h-[400px]", 
  height = "400px",
  rotation = [0, 0, 0],
  cameraPosition = [0, 0, 5]
}: ModelViewerProps) {
  const [isClient, setIsClient] = useState(false);
  const [modelPath3d, setModelPath3d] = useState<string>('');
  
  // Make sure we're in the browser before attempting to render
  useEffect(() => {
    setIsClient(true);
    // Make sure path is prefixed correctly
    setModelPath3d(modelPath.startsWith('/') ? modelPath : `/${modelPath}`);
  }, [modelPath]);

  if (!isClient) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-50`} style={{ height }}>
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#D4AF37] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-2 text-gray-600">Loading 3D viewer...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className} style={{ height }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense fallback={<ModelLoading />}>
          <Stage environment="city" intensity={0.6}>
            <Model modelPath={modelPath3d} rotation={rotation} />
          </Stage>
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}
