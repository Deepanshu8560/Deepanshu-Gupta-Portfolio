import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCubes() {
    const ref = useRef<THREE.Points>(null);
    const particleCount = 700;

    const positions = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 12;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (ref.current) {
            const positions = ref.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;

                // Float up and reset
                positions[i3 + 1] += 0.01;
                if (positions[i3 + 1] > 6) {
                    positions[i3 + 1] = -6;
                }

                // Slight horizontal drift
                positions[i3] += Math.sin(state.clock.elapsedTime + i) * 0.001;
                positions[i3 + 2] += Math.cos(state.clock.elapsedTime + i) * 0.001;
            }

            ref.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#10B981"
                size={0.04}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.5}
            />
        </Points>
    );
}

export const ProjectsBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 opacity-40">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} intensity={1} color="#10B981" />
                <pointLight position={[-5, -5, -5]} intensity={0.5} color="#0EA5E9" />
                <FloatingCubes />
            </Canvas>
        </div>
    );
};
