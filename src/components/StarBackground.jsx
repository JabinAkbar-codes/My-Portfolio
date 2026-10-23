import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useTheme } from "@/contexts/theme-provider";
function StarsLayer({ count, radius, color, size }) {
    const ref = useRef(null);
    const { pointer } = useThree();
    // Manually generates star positions on a 3D sphere to avoid maath bugs
    const positions = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = u * 2.0 * Math.PI;
            const phi = Math.acos(2.0 * v - 1.0);
            const r = Math.cbrt(Math.random()) * radius;
            p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            p[i * 3 + 2] = r * Math.cos(phi);
        }
        return p;
    }, [count, radius]);
    // Rotation animation and mouse reaction (60fps)
    useFrame((_, delta) => {
        if (ref.current) {
            // Continuous, smooth rotation
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
            // Reatividade sutil ao mouse
            ref.current.rotation.x += pointer.x * 0.001;
            ref.current.rotation.y += pointer.y * 0.001;
        }
    });
    return (<group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color={color} size={size} sizeAttenuation={true} depthWrite={false}/>
      </Points>
    </group>);
}
export default function StarBackground() {
    const { theme } = useTheme();
    // Checks if it's light mode (directly or via system)
    const isLightMode = theme === "light" ||
        (theme === "system" &&
            !window.matchMedia("(prefers-color-scheme: dark)").matches);
    // Dynamic colors depending on the theme
    const starColor = isLightMode ? "#7c3aed" : "#fafafa"; // Roxo escuro no light, branco no dark
    const neonColor = isLightMode ? "#5b21b6" : "#a5b4fc"; // Roxo mais profundo no light, roxo claro/neon no dark
    return (<div className="pointer-events-none fixed inset-0 z-0 w-full h-full overflow-hidden" aria-hidden="true" role="presentation">
      <Canvas camera={{ position: [0, 0, 1] }} gl={{
            antialias: false, // Disabled for performance, since these are just points
            powerPreference: "high-performance",
        }} dpr={[1, 2]} // Support for Retina screens (Mac/iPhones)
    >
        <Suspense fallback={null}>
          {/* Camada 1: Muitas estrelas finas */}
          <StarsLayer count={4000} radius={1.5} color={starColor} size={0.002}/>
          {/* Layer 2: Highlight stars, slightly bigger for added depth */}
          <StarsLayer count={800} radius={1.5} color={neonColor} size={0.003}/>
        </Suspense>
      </Canvas>
    </div>);
}
