import { useEffect, useRef, useState } from 'react';

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const startTimeRef = useRef(null);
  const timerIdRef = useRef(null);

  const startTimer = () => {
    startTimeRef.current = performance.now();

    timerIdRef.current = setInterval(() => {
      const currentTime = performance.now();
      const elapsedSeconds = Math.floor(
        (currentTime - startTimeRef.current) / 1000
      );
      setTime(elapsedSeconds);
    }, 1000);
  };

  const clearTimer = () => {
    clearInterval(timerIdRef.current);
  };

  useEffect(() => {
    // ensuring that the interval is cleared when the component using the hook is unmounted
    return () => {
      clearTimer();
    };
  }, []);

  return [time, startTimer, clearTimer];
};
