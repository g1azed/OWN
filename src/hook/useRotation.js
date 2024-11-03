import { useState, useEffect } from "react";

const useRotation = (scrollRef) => {
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      setRotation(scrollLeft / 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  return rotation;
};

export default useRotation;
