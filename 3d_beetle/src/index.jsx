import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Text } from "@react-three/drei";
import { angleToRadians } from "./angle";
import * as THREE from "three";
import Beetle from  "../public/Beetle";
import gsap from "gsap";

export default function Three(){

    const orbitControlsRef = useRef(null);
    const BeetleRef=useRef(null);
    const headRef = useRef(null);
    const leftLegRef = useRef(null);
    const rightLegRef = useRef(null);
    const toothRef = useRef(null);
    let beetlePosition=new THREE.Vector3();
    let beetleRotation=new THREE.Euler();

    useFrame((state) => {
        if (!!orbitControlsRef.current) {
            const { x, y } = state.mouse;
            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
            orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
            orbitControlsRef.current.update();
        }

        if (BeetleRef.current) {
            const { x, y, z } = BeetleRef.current.position;
            // Update annotation positions
            headRef.current.position.set(x + 2, y + 70, z - 2);
            leftLegRef.current.position.set(x + 26, y + 5, z+10);
            rightLegRef.current.position.set(x -26, y - 5, z-10);
             toothRef.current.position.set(x +  2, y + 20, z -2);
        }

    })

    return (
         <>
            <PerspectiveCamera makeDefault position={[-4, -10, -2]} />
            <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(0)} maxPolarAngle={angleToRadians(360)} />
            <mesh position={[-2, 1.5, 0]} castShadow ref={BeetleRef}>
                {/* <sphereGeometry args={[0.5, 32, 32]} /> */}
                <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
            </mesh>
            <ambientLight args={["#ffffff", 0.25]} />
            <spotLight args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />
            <Environment background>
                <mesh>
                    <meshBasicMaterial color="#2266cc" side={THREE.BackSide} />
                </mesh>
            </Environment>
            <Text
               ref={headRef}
                fontSize={10} // Adjust font size as needed
                color="black" // Text color
                anchorX="center" // Text alignment
                anchorY="middle"
            >
                Head
            </Text>
            <Text
               ref={leftLegRef}
                fontSize={6} // Adjust font size as needed
                color="black" // Text color
                anchorX="center" // Text alignment
                anchorY="middle"
            >
                Left_Leg
            </Text>

            <Text
                ref={rightLegRef}
                fontSize={6} // Adjust font size as needed
                color="black" // Text color
                anchorX="center" // Text alignment
                anchorY="middle"
            >
                Right_Leg
            </Text>

            <Text
                ref={toothRef}
                fontSize={6} // Adjust font size as needed
                color="black" // Text color
                anchorX="center" // Text alignment
                anchorY="middle"
            >
                Tooth
            </Text>
        </>
    )
}