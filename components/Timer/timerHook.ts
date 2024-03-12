import { useState, useEffect } from "react";

export const useTimer = (
  durationMinutes: number, 
  limit: number, 
  freeze: boolean
) => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isExpired, setIsExpired] = useState(false);
  const [isExpiredLimit, setIsExpiredLimit] = useState(false);

  useEffect(() => {
    const initialSeconds = durationMinutes * 60;
    setSecondsLeft(initialSeconds);
  }, [durationMinutes]);

  useEffect(() => {
    if (freeze) {
      // If freeze === true, the timer is "frozen" and does not decrease the time
      return;
    }

    if (!isExpired) {
      const intervalId = setInterval(() => {
        setSecondsLeft((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(intervalId);
            // Mark the timer as expired
            setIsExpired(true);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isExpired, freeze]);

  useEffect(() => {
    // Check if the time has expired relative to the specified limit
    setIsExpiredLimit(secondsLeft <= limit);
  }, [secondsLeft, limit]);

  return { isExpired, secondsLeft, isExpiredLimit };
}