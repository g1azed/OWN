import styled, { keyframes } from "styled-components";
import { useState } from "react";
import vwCalc from "../../util/vwCalc";
import { BasePoppins150 } from "../style/BasePoppins";
import { BasePretendard20 } from "../style/BasePretendard";
import ImgBox from "../ImgBox";
import needs1 from "../../assets/brandStory/needs1.png";
import needs2 from "../../assets/brandStory/needs2.png";
import needs3 from "../../assets/brandStory/needs3.png";
import useIntersectionObserverRef from "../../hook/useIntersectionObserverRef";
import { ReactComponent as LineSVG1 } from "../../assets/icon/needLine1.svg";
import { ReactComponent as LineSVG2 } from "../../assets/icon/needLine2.svg";

const Poppins150 = styled(BasePoppins150)`
  text-transform: uppercase;
`;

const Word = styled.span`
  position: absolute;
  top: ${(props) => vwCalc(props.$top)};
  left: ${(props) => vwCalc(props.$left)};
`;

const NeedsImgBox = styled(ImgBox)`
  position: absolute;
  top: ${(props) => vwCalc(props.$top)};
  left: ${(props) => vwCalc(props.$left)};
`;

const Pretendard20 = styled(BasePretendard20)`
  margin-top: ${vwCalc(945)};
  text-align: center;
`;

const words = [
  { text: "what", top: 300, left: 360 },
  { text: "do", top: 300, left: 1189 },
  { text: "they", top: 470, left: 220 },
  { text: "need", top: 670, left: 1252 },
];

const images = [
  {
    src: needs1,
    alt: "두 손으로 얼굴을 가리고 울고 있는 여자의 앞모습",
    width: 278,
    height: 401,
    top: 189,
    left: 882,
  },
  {
    src: needs2,
    alt: "두 손으로 머리를 감싸고 좌절하고 있는 여자의 옆모습",
    width: 209,
    height: 283,
    top: 490,
    left: 663,
  },
  {
    src: needs3,
    alt: "공허하게 창 밖을 바라보고 있는 남자의 뒷모습",
    width: 222,
    height: 191,
    top: 700,
    left: 915,
  },
];

// Keyframes
const drawLine1 = keyframes`
  from {
    stroke-dashoffset: 600;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const drawFirstPath = keyframes`
  from {
    stroke-dashoffset: -2000;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const drawSecondPath = keyframes`
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

// 애니메이션 적용 컴포넌트
const Line1 = styled(LineSVG1)`
  position: absolute;
  top: ${vwCalc(762)};
  left: ${vwCalc(611)};
  width: ${vwCalc(137)};
  height: ${vwCalc(87)};

  path {
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
    animation: ${(props) => (props.$isVisible ? drawLine1 : "none")} 3.5s ease
      forwards;
  }
`;

const Line2 = styled(LineSVG2)`
  position: absolute;
  top: ${vwCalc(508)};
  left: ${vwCalc(896)};
  width: ${vwCalc(583)};
  height: ${vwCalc(302)};

  path:nth-child(1) {
    stroke-dasharray: 2000;
    stroke-dashoffset: -2000;
    animation: ${(props) => (props.$isVisible ? drawFirstPath : "none")} 2.2s
      ease-out 0.5s forwards;
  }

  path:nth-child(2) {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${(props) => (props.$isVisible ? drawSecondPath : "none")} 2.5s
      ease 2.65s forwards;
  }
`;

const Needs = () => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserverRef({
    callback: () => setIsVisible(true),
    options: { threshold: 0.1 },
  });

  return (
    <section ref={ref}>
      <Poppins150>
        {words.map((word, index) => (
          <Word key={index} $top={word.top} $left={word.left}>
            {word.text}
          </Word>
        ))}
      </Poppins150>

      {images.map((image, index) => (
        <NeedsImgBox
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          $top={image.top}
          $left={image.left}
        />
      ))}

      <Pretendard20>
        "그들에게 가장 필요한 것은 무엇일까?" 라는 고민 끝에
      </Pretendard20>

      <Line1 $isVisible={isVisible} />
      <Line2 $isVisible={isVisible} />
    </section>
  );
};

export default Needs;
