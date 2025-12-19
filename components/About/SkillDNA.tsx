import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
    { name: 'React', position: [0, 2, 0], color: '#61DAFB' },
    { name: 'TypeScript', position: [1.5, 1, 0], color: '#3178C6' },
    { name: 'Node.js', position: [-1.5, 1, 0], color: '#339933' },
    { name: 'Three.js', position: [0, -2, 0], color: '#000000' },
    { name: 'Design', position: [1, -1, 0], color: '#F24E1E' },
    { name: 'DevOps', position: [-1, -1, 0], color: '#FF9900' },
];

function DNAHelix() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    // Create helix points
    const helixPoints1: THREE.Vector3[] = [];
    const helixPoints2: THREE.Vector3[] = [];
    const connections: [THREE.Vector3, THREE.Vector3][] = [];

    for (let i = 0; i < 50; i++) {
        const t = (i / 50) * Math.PI * 4;
        const y = (i / 50) * 4 - 2;

        const x1 = Math.cos(t) * 0.5;
        const z1 = Math.sin(t) * 0.5;
        const point1 = new THREE.Vector3(x1, y, z1);
        helixPoints1.push(point1);

        const x2 = Math.cos(t + Math.PI) * 0.5;
        const z2 = Math.sin(t + Math.PI) * 0.5;
        const point2 = new THREE.Vector3(x2, y, z2);
        helixPoints2.push(point2);

        if (i % 5 === 0) {
            connections.push([point1, point2]);
        }
    }

    return (
        <group ref={groupRef}>
            {/* First helix strand */}
            <Line
                points={helixPoints1}
                color="#0EA5E9"
                lineWidth={2}
            />

            {/* Second helix strand */}
            <Line
                points={helixPoints2}
                color="#8B5CF6"
                lineWidth={2}
            />

            {/* Connections */}
            {connections.map((connection, i) => (
                <Line
                    key={i}
                    points={connection}
                    color="#10B981"
                    lineWidth={1}
                />
            ))}

            {/* Skill nodes */}
            {skills.map((skill, i) => (
                <mesh key={i} position={skill.position as [number, number, number]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.5} />
                </mesh>
            ))}
        </group>
    );
}

export const SkillDNA = () => {
    return (
        <div className="w-full h-96">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <DNAHelix />
            </Canvas>
        </div>
    );
};
