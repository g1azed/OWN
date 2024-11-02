import styled from "styled-components";
import Insight1 from "./insight/Insight1";
import Insight2 from "./insight/Insight2";
import Insight3 from "./insight/Insight3";
import { useState } from "react";
import useIntersectionObserverRef from "../../hook/useIntersectionObserverRef";

const Ol = styled.ol`
  display: flex;
  color: white;
  justify-content: space-between;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;
const Insight = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useIntersectionObserverRef({
    callback: () => setIsVisible(true),
    options: { root: null, threshold: 0.1 },
  });

  return (
    <>
      <Ol ref={sectionRef} $isVisible={isVisible}>
        <Insight1 />
        <Insight2 />
        <Insight3 />
      </Ol>
    </>
  );
};

export default Insight;
