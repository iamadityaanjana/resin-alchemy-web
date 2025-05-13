import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

type ModelViewerProps = {
  modelPath: string;
  className?: string;
  height?: string;
  rotation?: [number, number, number];
  cameraPosition?: [number, number, number];
}

export function PureThreeModelViewer({ 
  modelPath, 
  className = "w-full h-[400px]", 
  height = "400px",
  rotation = [0, 0, 0],
  cameraPosition = [0, 0, 5]
}: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize loading spinner
    setLoading(true);
    setError(null);
    
    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
    
    // Set renderer size
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    
    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 1.5;
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    const stlLoader = new STLLoader();
    const meshMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#D4AF37"), // Gold color
      metalness: 0.3,
      roughness: 0.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      reflectivity: 0.5,
    });
    
    // Use absolute path for model loading
    const absolutePath = modelPath.startsWith('/') ? modelPath : `/${modelPath}`;
    
    // Load the STL file
    stlLoader.load(
      absolutePath,
      (geometry) => {
        try {
          // Center the model
          geometry.center();
          
          const mesh = new THREE.Mesh(geometry, meshMaterial);
          
          // Apply rotation
          mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
          
          scene.add(mesh);
          
          // Scale model to fit viewport
          const box = new THREE.Box3().setFromObject(mesh);
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0) {
            const scale = 2 / maxDim;
            mesh.scale.set(scale, scale, scale);
          }
          
          // Set up camera position to view the model properly
          const boundingBox = new THREE.Box3().setFromObject(mesh);
          const center = boundingBox.getCenter(new THREE.Vector3());
          
          // Position camera to see the centered model
          controls.target.copy(center);
          
          setLoading(false);
          
          // Animation loop
          const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
          };
          animate();
        } catch (err) {
          console.error('Error processing geometry:', err);
          setError('An error occurred while rendering the model.');
          setLoading(false);
        }
      },
      (xhr) => {
        // Progress callback
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        // Error callback
        console.error('An error occurred loading the STL file', error);
        setError('Failed to load the 3D model. Please try again later.');
        setLoading(false);
      }
    );
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      renderer.dispose();
      if (controls) controls.dispose();
    };
  }, [modelPath, height, rotation, cameraPosition]);
  
  return (
    <div className={className} style={{ height, position: 'relative' }}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-70 z-10">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#D4AF37] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-2 text-gray-600">Loading 3D model...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
          <div className="text-center p-4">
            <p className="text-red-500 font-semibold">Failed to load 3D model</p>
            <p className="text-sm text-gray-600 mt-2">{error}</p>
          </div>
        </div>
      )}
      
      <div 
        ref={containerRef} 
        className="w-full h-full" 
      />
    </div>
  );
}
