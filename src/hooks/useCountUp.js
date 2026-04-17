import React, { useEffect, useMemo, useState } from "react";

export function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const targetValue = useMemo(() => Number(target), [target]);

  useEffect(() => {
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(targetValue * eased));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [duration, targetValue]);

  return count;
}
