import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);
    useEffect(() => {
        let isMounted = true;
        let progressInterval;
        // Starts the bar climbing up to 90%
        progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(progressInterval);
                    return 90; // Pauses at 90% waiting for the page to load
                }
                const step = Math.floor(Math.random() * 5) + 2;
                return Math.min(90, prev + step);
            });
        }, 40);
        const finishLoading = () => {
            if (!isMounted)
                return;
            clearInterval(progressInterval);
            setProgress(100);
            setTimeout(() => {
                if (isMounted)
                    setIsLoaded(true);
                setTimeout(() => {
                    if (isMounted)
                        setShouldRender(false);
                }, 700);
            }, 400); // small delay to show the 100%
        };
        if (document.readyState === "complete") {
            // Already loaded? Give it a minimum delay just for the animation's sake, then complete
            setTimeout(finishLoading, 600);
        }
        else {
            // Waits for the window's load event (images, styles, etc)
            window.addEventListener("load", finishLoading);
            // Safety fallback (in case the load event never fires)
            setTimeout(finishLoading, 4000);
        }
        return () => {
            isMounted = false;
            clearInterval(progressInterval);
            window.removeEventListener("load", finishLoading);
        };
    }, []);
    if (!shouldRender)
        return null;
    return (<div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-700 ease-in-out select-none ${isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      {/* Subtle background glow */}
      <div className="absolute w-72 h-72 rounded-full bg-primary/20 blur-[120px] pointer-events-none -z-10 animate-pulse"/>

      <div className="flex flex-col items-center gap-6">
        {/* Identidade / Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Terminal className="h-5 w-5 text-primary"/>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Jabin
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-56 sm:w-64">
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden p-[1px]">
            <div className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(168,85,247,0.6)]" style={{ width: `${progress}%` }}/>
          </div>

          {/* Progress Status */}
          <div className="flex justify-between items-center mt-2.5 px-0.5 text-xs font-mono text-white/50">
            <span>Loading Environment...</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>);
}
