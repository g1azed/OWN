import { useState } from "react";

const useMovePosition = ({
  $top,
  $left,
  $hoverX,
  $hoverY,
  $speed,
  $duration,
  $minDuration,
  $maxDuration,
}) => {
  const [position, setPosition] = useState({ top: $top, left: $left });
  const [hovered, setHovered] = useState(false);

  const distance = Math.sqrt($hoverX ** 2 + $hoverY ** 2);
  const speed = $speed || 200;
  const minDuration = $minDuration || 0.3;
  const maxDuration = $maxDuration || 1.8;
  const duration =
    $duration || Math.min(Math.max(distance / speed, minDuration), maxDuration);

  const onMouseEnter = () => {
    if (!hovered) {
      setPosition({
        top: $top + $hoverY,
        left: $left + $hoverX,
      });
      setHovered(true);
    }
  };

  return { position, duration, onMouseEnter };
};

export default useMovePosition;
