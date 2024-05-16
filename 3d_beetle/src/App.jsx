import { useState,Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import {Environment, OrbitControls, ContactShadows } from '@react-three/drei'
import Beetle from '../public/Beetle'
import Footer from './Footer'
import Three from './index';

// const Annotation = ({ position, text }) => {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[0, 0, 1]} />
//       <meshBasicMaterial color="red" />
//       <textGeometry attach="geometry" args={[text, { size: 0.9, height: 0.02 }]} />
//       <meshBasicMaterial attach="material" color="black" />
//     </mesh>
//   );
// };

// const camera=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.1,1000);
//         camera.position.set(5,5,2.5);
//         const ambientLight=new THREE.AmbientLight(0xffffff);
//         scene.add(ambientLight);
//         const directionalLight=new THREE.DirectionalLight(0Xffffff,3);
//         scene.add(directionalLight);

function App() {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   const handleResize = () => {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  return (
    <>
     <Canvas id="three-canvas-container" shadows
      camera={{position:[-4,-10,5],fov:3000}}
      style={{height:'70vh', width:'100vw'}}
     >
      <ambientLight/>
      {/* <DirectionalLight/> */}
      <OrbitControls/>
      <Suspense fallback={null}>
      <Three/>
       <Beetle scale={[0.5, 0.5, 0.5]} /> 
        {/* <Annotation position={[1,1,1]} text="head"/>  */}
      {/* <Annotation position={[-0.5,-1,0]} text="right leg"/> */}
      {/* <Annotation position={[0.5,-1,0]} text="long tooth"/> */}
      {/* <Annotation position={[0,-0.5,1]} text="left leg"/>  */}
      </Suspense>
      <Environment preset='sunset'/>
      <ContactShadows position={[0,-2,0]} opacity={1} scale={50} blur={1} far={5} resolution={256} color="#000000"/>
     </Canvas><div className='container'>
     <h1>3D Beetle</h1></div>
     <Footer/>
    </>
  )
}

export default App
