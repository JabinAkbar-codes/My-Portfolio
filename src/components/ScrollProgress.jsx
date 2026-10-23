import { useEffect, useRef } from "react";
/**
 * Scroll progress bar fixed at the top of the page.
 * Updates via requestAnimationFrame directly on the DOM (no setState)
 * to avoid causing re-renders in React.
 */
export default function ScrollProgress() {
    const barRef = useRef(null);
    const rafRef = useRef(null);
    useEffect(() => {
        const bar = barRef.current;
        if (!bar)
            return;
        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            bar.style.width = `${Math.min(progress, 100)}%`;
            rafRef.current = null;
        };
        const onScroll = () => {
            if (!rafRef.current) {
                rafRef.current = requestAnimationFrame(update);
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        update(); // Initial state
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (rafRef.current)
                cancelAnimationFrame(rafRef.current);
        };
    }, []);
    return (<div id="scroll-progress" ref={barRef} style={{ width: "0%" }} aria-hidden="true"/>);
}
