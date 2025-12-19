import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function GridParticles() {
    const ref = useRef<THREE.Points>(null);
    const particleCount = 900;

    const positions = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const gridSize = 40;
        let index = 0;

        for (let x = 0; x < gridSize; x++) {
            for (let z = 0; z < gridSize; z++) {
                positions[index * 3] = (x - gridSize / 2) * 0.3;
                positions[index * 3 + 1] = 0;
                positions[index * 3 + 2] = (z - gridSize / 2) * 0.3;
                index++;
            }
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

                // Create ripple effect
                const distance = Math.sqrt(x * x + z * z);
                positions[i3 + 1] = Math.sin(distance * 0.5 - state.clock.elapsedTime * 2) * 0.3;
            }

            ref.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#EC4899"
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

export const ExperienceBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 opacity-40">
            <Canvas
                camera={{ position: [0, 3, 5], fov: 75, rotation: [-0.5, 0, 0] }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 5, 0]} intensity={1} color="#EC4899" />
                <GridParticles />
            </Canvas>
        </div>
    );
};
