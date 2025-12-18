import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function PulsingRings() {
    const ref = useRef<THREE.Points>(null);
    const particleCount = 600;

    const positions = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const rings = 5;
        const particlesPerRing = particleCount / rings;

        for (let ring = 0; ring < rings; ring++) {
            const radius = (ring + 1) * 0.8;
            for (let i = 0; i < particlesPerRing; i++) {
                const angle = (i / particlesPerRing) * Math.PI * 2;
                const index = ring * particlesPerRing + i;

                positions[index * 3] = Math.cos(angle) * radius;
                positions[index * 3 + 1] = (Math.random() - 0.5) * 0.5;
                positions[index * 3 + 2] = Math.sin(angle) * radius;
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
                const radius = Math.sqrt(x * x + z * z);

                // Pulsing effect
                const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + radius) * 0.1;
                const angle = Math.atan2(z, x);

                positions[i3] = Math.cos(angle) * radius * scale;
                positions[i3 + 2] = Math.sin(angle) * radius * scale;
            }

            ref.current.geometry.attributes.position.needsUpdate = true;
            ref.current.rotation.y = state.clock.elapsedTime * 0.1;
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

export const ContactBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 opacity-40">
            <Canvas
                camera={{ position: [0, 2, 6], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 5, 5]} intensity={1} color="#8B5CF6" />
                <pointLight position={[0, -5, -5]} intensity={0.5} color="#EC4899" />
                <PulsingRings />
            </Canvas>
        </div>
    );
};
