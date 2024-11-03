import { forwardRef, useRef } from "react";
import { useHorizontalScroll } from "../hook/useHorizontalScroll";
import DraggableScroll from "./DraggableScroll";

const HorizontalScroll = forwardRef(({ children }, ref) => {
  const internalRef = useRef(null);
  const scrollRef = ref || internalRef;
  useHorizontalScroll(scrollRef);

  return (
    <DraggableScroll direction="x" ref={scrollRef}>
      {children}
    </DraggableScroll>
  );
});

export default HorizontalScroll;
