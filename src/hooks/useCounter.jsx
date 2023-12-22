import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(false);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => ++prevCount);
    }
  }, [count]);

  const handleDisplay = useCallback(
    () => setIsShow((prevIsShow) => !prevIsShow),
    []
  );

  return {
    count,
    isShow,
    doubleCount,
    doubleCount,
    handleClick,
    handleDisplay,
  };
};
