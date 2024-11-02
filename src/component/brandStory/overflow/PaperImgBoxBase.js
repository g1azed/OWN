import styled from "styled-components";
import vwCalc from "../../../util/vwCalc";
import ImgBox from "../../ImgBox";

const PaperImgBoxBase = styled(ImgBox)`
  position: absolute;
  top: ${(props) => vwCalc(props.$top) || 0};
  left: ${(props) => vwCalc(props.$left) || 0};
  width: ${(props) => vwCalc(props.width)};
  height: ${(props) => vwCalc(props.height)};
  z-index: ${(props) => props.$zIndex || 1};
  transform: ${(props) => (props.$reverse ? "scale(1, -1)" : "scale(1)")};
  transition: top ${(props) => props.$duration}s ease-out,
    left ${(props) => props.$duration}s ease-out;
  cursor: pointer;
`;

export default PaperImgBoxBase;
