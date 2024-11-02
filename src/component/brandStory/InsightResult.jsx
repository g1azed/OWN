import styled, { keyframes } from "styled-components";
import { useState } from "react";
import vwCalc from "../../util/vwCalc";
import { colors } from "../../styles";
import { BasePoppins100 } from "../style/BasePoppins";
import { BasePretendard20 } from "../style/BasePretendard";
import ImgBox from "../ImgBox";
import useIntersectionObserverRef from "../../hook/useIntersectionObserverRef";
import { ReactComponent as LineSVG1 } from "../../assets/icon/insightLine1.svg";
import { ReactComponent as LineSVG2 } from "../../assets/icon/insightLine2.svg";
import { ReactComponent as LineSVG3 } from "../../assets/icon/insightLine3.svg";
import ownStar from "../../assets/icon/ownStar_orange_fill.svg";

const MAIN_ORANGE = colors.mainOrange;
const MAIN_IVORY = colors.mainIvory;
const WHITE = "#ffffff";

const Wrapper = styled.div`
  padding-top: ${vwCalc(294)};
`;

const EnWrapper = styled.div`
  margin-bottom: ${vwCalc(72)};
  padding-left: ${vwCalc(192)};
  text-transform: uppercase;
  word-spacing: ${vwCalc(8)};
`;

const Poppins120 = styled(BasePoppins100)`
  color: ${MAIN_IVORY};
  font-size: ${vwCalc(120)};
  font-weight: 500;
`;

const Italic = styled.span`
  font-style: italic;
`;

const StrongTypo = styled.strong`
  display: inline-block;
  padding-top: ${vwCalc(44)};
  padding-left: ${vwCalc(368)};
  padding-bottom: ${vwCalc(44)};
  color: ${MAIN_ORANGE};
`;

const And = styled.span`
  padding-right: ${vwCalc(54)};
`;

const Pretendard20 = styled(BasePretendard20)`
  color: ${WHITE};
  text-align: center;
`;

const OwnStarImgBox = styled(ImgBox)`
  position: absolute;
  right: ${vwCalc(172)};
  bottom: ${vwCalc(266)};
`;

// Keyframes
const rotateHow = keyframes`
  0% {
    transform: rotate(-10deg);
    opacity: 1;
  }
  35% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
    opacity: 1;
  }
`;

const drawLine1 = keyframes`
  from {
    stroke-dashoffset: 1200;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const drawLine2 = keyframes`
  from {
    stroke-dashoffset: -1200;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const drawLine3 = keyframes`
  from {
    stroke-dashoffset: 1200;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

// 애니메이션 적용 컴포넌트
const How = styled(Italic)`
  position: absolute;
  top: ${vwCalc(488)};
  left: ${vwCalc(242)};
  font-size: ${vwCalc(28)};
  opacity: 0;
  animation: ${(props) => (props.$isVisible ? rotateHow : "none")} 1.2s ease-in
    1.6s forwards;
`;

const Line1 = styled(LineSVG1)`
  position: absolute;
  top: ${vwCalc(504)};
  left: ${vwCalc(170)};
  width: ${vwCalc(218)};
  height: ${vwCalc(97)};

  path {
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation: ${(props) => (props.$isVisible ? drawLine1 : "none")} 1.3s
      ease-in-out 2.8s forwards;
  }
`;

const Line2 = styled(LineSVG2)`
  position: absolute;
  top: ${vwCalc(532)};
  left: ${vwCalc(408)};
  width: ${vwCalc(77)};
  height: ${vwCalc(42)};

  path {
    stroke-dasharray: 1200;
    stroke-dashoffset: -1200;
    animation: ${(props) => (props.$isVisible ? drawLine2 : "none")} 2s ease-out
      2.9s forwards;
  }
`;

const Line3 = styled(LineSVG3)`
  position: absolute;
  top: ${vwCalc(588)};
  left: ${vwCalc(574)};
  width: ${vwCalc(1136)};
  height: ${vwCalc(16)};

  path {
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation: ${(props) => (props.$isVisible ? drawLine3 : "none")} 1.5s
      ease-in-out forwards;
  }
`;

const InsightResult = () => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserverRef({
    callback: () => setIsVisible(true),
    options: { threshold: 1 },
  });

  return (
    <Wrapper ref={ref}>
      <EnWrapper>
        <Poppins120>
          we help people <Italic>who</Italic> are
        </Poppins120>
        <Poppins120>
          <How $isVisible={isVisible}>how?</How>
          <StrongTypo>tired of life relax</StrongTypo>
        </Poppins120>
        <Poppins120>
          <And>and,</And> find themselves.
        </Poppins120>
      </EnWrapper>

      <Pretendard20>
        우리는 삶에 지친 사람들이 휴식을 소유하며, 자신을 찾아나갈 수 있도록
        돕습니다.
      </Pretendard20>

      <Line3 $isVisible={isVisible} />
      <Line1 $isVisible={isVisible} />
      <Line2 $isVisible={isVisible} />
      <OwnStarImgBox
        src={ownStar}
        hideScreenReader={true}
        width={88}
        height={80}
      />
    </Wrapper>
  );
};

export default InsightResult;
