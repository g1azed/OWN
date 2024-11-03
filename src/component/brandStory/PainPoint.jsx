import { useRef } from "react";
import HorizontalScroll from "../HorizontalScroll";
import Ask from "./painPoint/Ask";
import Target1 from "./painPoint/Target1";
import Target2 from "./painPoint/Target2";
import Target3 from "./painPoint/Target3";
import useRotation from "../../hook/useRotation";

const PainPoint = () => {
  const scrollRef = useRef(null);
  const rotation = useRotation(scrollRef);

  return (
    <HorizontalScroll ref={scrollRef}>
      <Ask />
      <Target1 $rotation={rotation} />
      <Target2 $rotation={rotation} />
      <Target3 $rotation={rotation} />
    </HorizontalScroll>
  );
};

export default PainPoint;
