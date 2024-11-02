import styled from "styled-components";
import vwCalc from "../../util/vwCalc";
import { colors } from "../../styles";
import { BasePoppins100 } from "../style/BasePoppins";
import { BasePretendard20 } from "../style/BasePretendard";

import PaperImgData from "./overflow/PaperImgData";
import PaperImgBox from "./overflow/PaperImgBox";

const MAIN_ORANGE = colors.mainOrange;

const Poppins100 = styled(BasePoppins100)`
  padding-top: ${vwCalc(392)};
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  color: ${MAIN_ORANGE};
  text-transform: capitalize;
`;
const Pretendard20 = styled(BasePretendard20)`
  position: absolute;
  top: ${vwCalc(434)};
  left: ${vwCalc(872)};
`;

const Overflow2 = () => {
  return (
    <section>
      {PaperImgData.map((data, index) => (
        <PaperImgBox
          key={index}
          $type={data.$type}
          $top={data.$top}
          $left={data.$left}
          $hoverX={data.$hoverX}
          $hoverY={data.$hoverY}
          $reverse={data.$reverse}
        />
      ))}
      {/* <PaperImgBox1
        src={paper1}
        alt="종이뭉치"
        $top={333}
        $left={950}
        $reverse={true}
      />
      <PaperImgBox1
        src={paper1}
        alt="종이뭉치"
        $top={368}
        $left={458}
        $reverse={true}
      />
      <PaperImgBox1
        src={paper1}
        alt="종이뭉치"
        $top={225}
        $left={1399}
        $reverse={true}
      />

      <PaperImgBox1 src={paper1} alt="종이뭉치" $top={520} $left={564} />
      <PaperImgBox1 src={paper1} alt="종이뭉치" $top={240} $left={763} />
      <PaperImgBox1 src={paper1} alt="종이뭉치" $top={482} $left={1227} />
      <PaperImgBox1 src={paper1} alt="종이뭉치" $top={328} $left={78} /> */}

      <Poppins100>
        i always
        <br /> had to do something.
      </Poppins100>
      <Pretendard20>
        우리는 어릴적부터 바빴습니다. 늘 항상 무언가를 해야만 했습니다.
        <br /> 성인이 되어서도 여전히 바쁘게 살아야 하는 우리는 문제가 있는지도
        몰랐습니다.
      </Pretendard20>
    </section>
  );
};

export default Overflow2;
