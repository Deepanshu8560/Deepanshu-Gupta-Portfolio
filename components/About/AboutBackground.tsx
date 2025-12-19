import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function WaveParticles() {
    const ref = useRef<THREE.Points>(null);
    const particleCount = 800;

    const positions = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (ref.current) {
            const positions = ref.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                const x = positions[i3];
                const z = positions[i3 + 2];

                // Create wave effect
                positions[i3 + 1] = Math.sin(x * 0.5 + state.clock.elapsedTime) *
                    Math.cos(z * 0.5 + state.clock.elapsedTime) * 0.5;
            }

            ref.current.geometry.attributes.position.needsUpdate = true;
            ref.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#8B5CF6"
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

export const AboutBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 opacity-40">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
                <WaveParticles />
            </Canvas>
        </div>
    );
};
