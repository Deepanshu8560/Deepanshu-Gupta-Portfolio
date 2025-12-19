import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { Skill } from '@/data/skills';

interface SkillOrbitProps {
    skills: Skill[];
    onSkillClick: (skill: Skill) => void;
}

function SkillPlanet({ skill, index, total, onClick }: { skill: Skill; index: number; total: number; onClick: () => void }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const orbitRadius = 3 + (index % 3) * 1.2;
    const orbitSpeed = 0.2 + (index % 3) * 0.1;
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            const angle = (index / total) * Math.PI * 2 + state.clock.elapsedTime * orbitSpeed;
            meshRef.current.position.x = Math.cos(angle) * orbitRadius;
            meshRef.current.position.z = Math.sin(angle) * orbitRadius;
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime + index) * 0.3;

            if (hovered) {
                meshRef.current.scale.setScalar(1.3);
            } else {
                meshRef.current.scale.setScalar(1);
            }
        }
    });

    return (
        <group>
            <mesh
                ref={meshRef}
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial
                    color={skill.color}
                    emissive={skill.color}
                    emissiveIntensity={hovered ? 0.8 : 0.3}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Skill name */}
            {hovered && (
                <Text
                    position={[0, 0.5, 0]}
                    fontSize={0.15}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                >
                    {skill.name}
                </Text>
            )}
        </group>
    );
}

function SolarSystem({ skills, onSkillClick }: SkillOrbitProps) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Continuous rotation on Y axis
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
            // Gentle tilt rotation on X axis
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Central core */}
            <mesh>
                <sphereGeometry args={[0.7, 32, 32]} />
                <meshStandardMaterial
                    color="#0EA5E9"
                    emissive="#0EA5E9"
                    emissiveIntensity={0.5}
                    metalness={1}
                    roughness={0}
                />
            </mesh>

            {/* Orbit rings */}
            {[3, 4.2, 5.4].map((radius, i) => (
                <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[radius, 0.01, 16, 100]} />
                    <meshBasicMaterial color="#334155" transparent opacity={0.3} />
                </mesh>
            ))}

            {/* Skills as planets */}
            {skills.map((skill, index) => (
                <SkillPlanet
                    key={skill.name}
                    skill={skill}
                    index={index}
                    total={skills.length}
                    onClick={() => onSkillClick(skill)}
                />
            ))}
        </group>
    );
}

export const SkillSolarSystem = ({ skills, onSkillClick }: SkillOrbitProps) => {
    return (
        <div className="w-full h-[900px]">
            <Canvas camera={{ position: [0, 4, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
                <SolarSystem skills={skills} onSkillClick={onSkillClick} />
            </Canvas>
        </div>
    );
};
