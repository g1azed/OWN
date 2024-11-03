import styled from "styled-components";
import Typo from "./solution/Typo";
import CoreValue from "./solution/CoreValue";
import Keyword from "./solution/Keyword";
import DraggableScroll from "../DraggableScroll";

const UpperCase = styled.div`
  text-transform: uppercase;
`;

const Solution = () => {
  return (
    <DraggableScroll direction="y">
      <UpperCase>
        <Typo />
        <CoreValue />
        <Keyword />
      </UpperCase>
    </DraggableScroll>
  );
};

export default Solution;
