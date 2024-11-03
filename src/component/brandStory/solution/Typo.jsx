import styled from "styled-components";
import vwCalc from "../../../util/vwCalc";
import { colors } from "../../../styles";
import { BasePoppins150 } from "../../style/BasePoppins";
import { BasePretendard26 } from "../../style/BasePretendard";
import ImgBox from "../../ImgBox";
import analog from "../../../assets/brandStory/solution_small.png";

const PADDING = vwCalc(80);

const Section = styled.section`
  position: relative;
  padding-top: ${vwCalc(200)};
  padding-left: ${PADDING};
  padding-bottom: ${vwCalc(82)};
`;

const H2 = styled(BasePretendard26)`
  font-size: ${vwCalc(30)};
  color: ${colors.bigBlack};
`;

const Poppins145 = styled(BasePoppins150)`
  font-size: ${vwCalc(145)};
  font-weight: 500;
`;

const EnParagraph = styled(Poppins145)`
  margin-top: ${(props) => vwCalc(props.$marginTop)};
  margin-left: ${(props) => vwCalc(props.$marginLeft)};
  margin-bottom: ${vwCalc(14)};
`;

const Wrapper = styled.div`
  position: absolute;
  top: ${vwCalc(596)};
  left: ${PADDING};
`;

const KoParagraph = styled(BasePretendard26)`
  margin-top: ${vwCalc(74)};
`;

const Typo = () => {
  return (
    <Section>
      <H2>solution</H2>
      <EnParagraph $marginTop={4}>
        with the <br />
        analog kit
      </EnParagraph>
      <EnParagraph $marginTop={208} $marginLeft={1044}>
        provided
      </EnParagraph>
      <EnParagraph $marginLeft={88}>once a month,</EnParagraph>
      <EnParagraph $marginLeft={152}>so that you can get</EnParagraph>
      <EnParagraph $marginLeft={542}>proper rest</EnParagraph>
      <Wrapper>
        <ImgBox
          src={analog}
          alt="자연적인 느낌의 침구 인테리어"
          width={609}
          height={207}
        />
        <KoParagraph>
          한 달에 한 번씩 제공되는 아날로그 키트를 사용하면 적절한 휴식을 취할
          수 있습니다.
        </KoParagraph>
      </Wrapper>
    </Section>
  );
};

export default Typo;
