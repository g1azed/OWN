import styled from "styled-components";
import { colors } from "../../../styles";
import vwCalc from "../../../util/vwCalc";
import { BasePretendard20 } from "../../style/BasePretendard";
import SurveyTitle from "./SurveyTitle";
import SurveyInfo from "./SurveyInfo";
import BarChartContainer from "./BarChartContainer";

const MAIN_ORANGE = colors.mainOrange;
const BIG_BLACK = colors.bigBlack;
const WHITE = "#FFFFFF";
const GRAY = "#DFDFDF";

const Label = styled.span`
  color: ${(props) => props.$color};
`;

const barChartData = [
  {
    color: GRAY,
    targetHeight: vwCalc(346),
    label: <Label $color={BIG_BLACK}>1 to 10 minutes</Label>,
  },
  {
    color: GRAY,
    targetHeight: vwCalc(503),
    label: <Label $color={BIG_BLACK}>10 to 30 minutes</Label>,
  },
  {
    color: MAIN_ORANGE,
    targetHeight: vwCalc(914),
    label: (
      <Label $color={WHITE}>
        30 minutes
        <br />
        to 1 hour
      </Label>
    ),
  },
];

const Wrapper = styled.div`
  position: relative;
  padding-right: ${vwCalc(1195)};
`;

const BarChartWrapper = styled(BasePretendard20)`
  position: absolute;
  left: ${vwCalc(500)};
  bottom: 0;
  display: flex;
  gap: ${vwCalc(44)};
  align-items: flex-end;
`;

const Survey2 = () => {
  return (
    <Wrapper>
      <section>
        <SurveyTitle
          title="dopamine addiction"
          percentage={27.4}
          marginTop={84}
        />
        <SurveyInfo
          keyword="도파민 중독"
          year={24}
          source="인크루드"
          participantNum="870"
        />
      </section>
      <BarChartWrapper as="ul">
        {barChartData.map((data, index) => (
          <BarChartContainer
            key={index}
            color={data.color}
            $targetHeight={data.targetHeight}
          >
            {data.label}
          </BarChartContainer>
        ))}
      </BarChartWrapper>
    </Wrapper>
  );
};

export default Survey2;
