import styled, { keyframes, css } from "styled-components";
import { useState } from "react";
import { colors } from "../../../styles";
import vwCalc from "../../../util/vwCalc";
import useIntersectionObserverRef from "../../../hook/useIntersectionObserverRef";
import SurveyTitle from "./SurveyTitle";
import SurveyInfo from "./SurveyInfo";

const MAIN_ORANGE = colors.mainOrange;
const BIG_BLACK = colors.bigBlack;
const GRAY = "#DFDFDF";
const WHITE = "#FFFFFF";

const Wrapper = styled.div`
  position: relative;
  padding-right: ${vwCalc(1195)};
`;

const Section = styled.section`
  position: relative;
  z-index: 1;
`;

const CompareTypo = styled.span`
  position: absolute;
  left: ${(props) => vwCalc(props.$left)};
  bottom: ${vwCalc(28)};
  font-family: Pretendard;
  // font-weight: 200;
  font-size: ${vwCalc(20)};
  color: ${(props) => props.$color};
  text-transform: uppercase;
  z-index: 1;
`;

const CircleBase = styled.div`
  position: absolute;
  border-radius: 50%;

  ${({ animation }) =>
    animation &&
    css`
      animation: ${animation} 2s ease-in-out forwards;
    `}
`;

const moveRedCircle = keyframes`
  0% {
    width: ${vwCalc(821)};
    height: ${vwCalc(821)};
    left: ${vwCalc(50)};
    bottom: ${vwCalc(-80)};
  }
  100% {
    width: ${vwCalc(1087)};
    height: ${vwCalc(1087)};
    left: ${vwCalc(358)};
    bottom: ${vwCalc(-165)};
  }
`;

const moveGrayCircle = keyframes`
  0% {
    width: ${vwCalc(192)};
    height: ${vwCalc(192)};
    left: ${vwCalc(1280)};
  }
  100% {
    width: ${vwCalc(322)};
    height: ${vwCalc(322)};
    left: ${vwCalc(1400)};
  }
`;

const RedCircle = styled(CircleBase)`
  width: ${vwCalc(821)};
  height: ${vwCalc(821)};
  left: ${vwCalc(50)};
  bottom: ${vwCalc(-80)};
  background-color: ${MAIN_ORANGE};

  animation: ${(props) => (props.$animate ? moveRedCircle : "none")} 2.8s
    ease-in-out forwards;
`;

const GrayCircle = styled(CircleBase)`
  width: ${vwCalc(192)};
  height: ${vwCalc(192)};
  left: ${vwCalc(1280)};
  bottom: ${vwCalc(-34)};
  background-color: ${GRAY};

  animation: ${(props) => (props.$animate ? moveGrayCircle : "none")} 1.5s
    ease-in-out forwards;
`;

const Survey1 = () => {
  const [redCircleVisible, setRedCircleVisible] = useState(false);
  const [grayCircleVisible, setGrayCircleVisible] = useState(false);

  const redCircleRef = useIntersectionObserverRef({
    callback: () => setRedCircleVisible(true),
    options: { root: null, rootMargin: "0px", threshold: 0.8 },
  });

  const grayCircleRef = useIntersectionObserverRef({
    callback: () => setGrayCircleVisible(true),
    options: { root: null, rootMargin: "0px", threshold: 0.8 },
  });

  return (
    <Wrapper>
      <Section>
        <SurveyTitle
          title="increased burnout"
          percentage={43.9}
          marginTop={420}
        />
        <SurveyInfo
          keyword="번아웃 증가"
          year={22}
          source="동아일보"
          participantNum="1,542"
        />
      </Section>
      <CompareTypo $color={WHITE} $left={870}>
        after
      </CompareTypo>
      <CompareTypo $colors={BIG_BLACK} $left={1528}>
        before
      </CompareTypo>
      <RedCircle ref={redCircleRef} $animate={redCircleVisible} />
      <GrayCircle ref={grayCircleRef} $animate={grayCircleVisible} />
    </Wrapper>
  );
};

export default Survey1;
