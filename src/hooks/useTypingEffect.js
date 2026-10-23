import { useState, useEffect } from "react";
export const useTypingEffect = ({ text, speed = 80, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    useEffect(() => {
        // Reset state whenever the typing target changes (text/speed/delay).
        setDisplayedText("");
        setIsComplete(false);
        let intervalId;
        const startTimeout = setTimeout(() => {
            let currentIndex = 0;
            intervalId = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                }
                else {
                    setIsComplete(true);
                    clearInterval(intervalId);
                }
            }, speed);
        }, delay);
        return () => {
            clearTimeout(startTimeout);
            if (intervalId)
                clearInterval(intervalId);
        };
    }, [text, speed, delay]);
    return { displayedText, isComplete };
};
