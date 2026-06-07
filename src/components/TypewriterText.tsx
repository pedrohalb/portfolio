import { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  startDelay?: number;
  onComplete?: () => void;
}

const TypewriterText = ({
  text,
  delay = 50,
  className = "",
  startDelay = 0,
  onComplete,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const hasCompleted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, delay);
      return () => clearTimeout(timer);
    }

    if (!hasCompleted.current) {
      hasCompleted.current = true;
      onComplete?.();
    }
  }, [displayedText, started, text, delay, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

export default TypewriterText;
