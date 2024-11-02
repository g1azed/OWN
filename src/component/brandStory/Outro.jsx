import styled from "styled-components";
import { Link } from "react-router-dom";
import vwCalc from "../../util/vwCalc";
import { colors } from "../../styles";
import { BasePoppins100 } from "../style/BasePoppins";
import { BasePretendard26 } from "../style/BasePretendard";
import ImgBox from "../ImgBox";
import branding from "../../assets/brandStory/outro_branding.png";
import arrow from "../../assets/icon/arrow.svg";

const Section = styled.section`
  padding-top: ${vwCalc(148)};
  padding-left: ${vwCalc(80)};
  text-transform: uppercase;
`;

const Flex = styled.div`
  display: flex;
  gap: ${(props) => vwCalc(props.$gap)};
`;

const Poppins100 = styled(BasePoppins100)`
  margin-bottom: ${vwCalc(42)};
  line-height: ${vwCalc(120)};
`;

const Pretendard28 = styled(BasePretendard26)`
  margin-top: ${vwCalc(18)};
  font-family: Pretendard;
  font-size: ${vwCalc(28)};
`;

const ScrollTopButton = styled.button`
  position: relative;
  display: flex;
  position: absolute;
  padding: ${vwCalc(27)};
  top: ${vwCalc(398)};
  left: ${vwCalc(1014)};
  font-weight: 500;
  background-color: ${colors.bigBlack};
  border-radius: ${vwCalc(50)};
  gap: ${vwCalc(10)};
  align-items: center;
`;

const BaseShape = styled.span`
  font-family: Pretendard;
  font-size: ${vwCalc(30)};
  color: #ffffff;
`;

const SquareLink = styled(BaseShape).attrs({
  as: Link,
})`
  padding-top: ${vwCalc(215)};
  width: ${vwCalc(568)};
  height: ${vwCalc(473)};
  font-weight: 400;
  background: ${(props) => props.$background};
  border-radius: ${vwCalc(33)};
  text-align: center;
`;

const Outro = ({ scrollToTop }) => {
  return (
    <Section>
      <Flex $gap={200}>
        <Poppins100>
          you can own <br />a rest and <br />
          find yourself
        </Poppins100>
        <Pretendard28>
          바쁘게 흘러가는 현대 사회 속 사람들은 점점 휴식의 중요성을 <br />
          잊어버리게 되었습니다. 우리 OWN은 사람들이 부족한 시간 속에서 <br />
          조금이라도 제대로 쉬며 휴식의 중요성을 전달합니다.
        </Pretendard28>
      </Flex>

      <ScrollTopButton onClick={scrollToTop} aria-label="상단으로 이동">
        <BaseShape>about story</BaseShape>
        <ImgBox src={arrow} hideScreenReader={true} width={35} height={22} />
      </ScrollTopButton>

      <Flex $gap={27}>
        <SquareLink to="/introbranding" $background={`url(${branding})`}>
          branding
        </SquareLink>
        <SquareLink to="/service" $background={colors.mainBlue}>
          service
        </SquareLink>
        <SquareLink to="/analog" $background={colors.mainOrange}>
          analog
        </SquareLink>
      </Flex>
    </Section>
  );
};

export default Outro;
