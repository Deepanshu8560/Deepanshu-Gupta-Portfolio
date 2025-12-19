import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SpiralParticles() {
    const ref = useRef<THREE.Points>(null);
    const particleCount = 1000;

    const positions = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const t = (i / particleCount) * Math.PI * 8;
            const radius = (i / particleCount) * 5;

            positions[i * 3] = Math.cos(t) * radius;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
            positions[i * 3 + 2] = Math.sin(t) * radius;
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.1;
            ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#0EA5E9"
                size={0.025}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.7}
            />
        </Points>
    );
}

export const SkillsBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 opacity-50">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#0EA5E9" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10B981" />
                <SpiralParticles />
            </Canvas>
        </div>
    );
};
