import { useRef } from "react";

const useThrottle = (callback, delay) => {
  const lastCallRef = useRef(0);
  const throttledFunction = (...args) => {
    const now = Date.now();
    if (now - lastCallRef.current >= delay) {
      callback(...args);
      lastCallRef.current = now;
    }
  };

  return throttledFunction;
};

export default useThrottle;
