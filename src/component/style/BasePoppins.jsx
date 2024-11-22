import styled from "styled-components";
import { colors, fontSize } from "../../styles";

const fontSizes = {
  small: fontSize.eSizeText,
  large: fontSize.eSizeHead,
};

export const BasePoppins = styled.p`
  color: ${(props) => props.$color || colors.bigBlack};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight || 600};
  line-height: ${(props) => props.$lineHeight || "110%"};
`;

export const BasePoppins100 = styled(BasePoppins)`
  font-size: ${(props) => props.$fontSize || fontSizes.small};
`;

export const BasePoppins150 = styled(BasePoppins)`
  font-size: ${(props) => props.$fontSize || fontSizes.large};
`;
