import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { colors } from "../styles";
import vwCalc from "../util/vwCalc";
import { BasePretendard20 } from "./style/BasePretendard";
import ImgBox from "./ImgBox";
import logoOrange from "../assets/logo/own_logo.svg";
import logoWhite from "../assets/logo/own_logo_white.svg";

const MAIN_ORANGE = colors.mainOrange;
const MAIN_IVORY = colors.mainIvory;
const WHITE = "#FFFFFF";
const LIGHTBLUE = "#C3E7FF";
const SMALL_BLACK = colors.smallBlack;

const PADDING_SIDE = vwCalc(200);

const showFooterPath = ["/introbranding", "/appservice", "/analog"];

const footerStyle = [
  {
    path: "/introbranding",
    bgColor: MAIN_ORANGE,
    color: MAIN_IVORY,
    titleColor: WHITE,
    logo: logoWhite,
  },
  {
    path: "/appservice",
    bgColor: LIGHTBLUE,
    color: SMALL_BLACK,
    titleColor: SMALL_BLACK,
    logo: logoOrange,
  },
  {
    path: "/analog",
    bgColor: MAIN_IVORY,
    color: MAIN_ORANGE,
    titleColor: MAIN_ORANGE,
    logo: logoOrange,
  },
];

const footerData = [
  {
    title: "Designer",
    items: [
      { name: "김민서", englishName: "Kim Min Seo" },
      { name: "신서영", englishName: "Sin Seo Yeong" },
      { name: "허준혁", englishName: "Heo Jun Hyeok" },
    ],
  },
  {
    title: "Programmer",
    items: [
      { name: "반현지", englishName: "Ban Hyeon Ji" },
      { name: "홍수지", englishName: "Hong Su Ji" },
    ],
  },
  {
    title: "Sources",
    items: [
      { name: "https://unsplash.com/" },
      { name: "https://www.istockphoto.com/kr" },
    ],
  },
];

const FooterWrapper = styled.footer`
  position: relative;
  padding: ${vwCalc(85)} ${PADDING_SIDE} ${vwCalc(56)};
  width: 100%;
  height: ${vwCalc(476)};
  background-color: ${(props) => props.$bgColor || MAIN_ORANGE};
  color: ${(props) => props.$color || MAIN_IVORY};
  font-family: Pretendard;
  font-size: ${vwCalc(17)};

  figure {
    margin-bottom: ${vwCalc(15)};
  }
`;

const Flex = styled.div`
  display: flex;
  position: absolute;
  right: ${PADDING_SIDE};
  gap: ${vwCalc(90)};
  font-weight: 400;
`;

const Ul = styled.ul`
  li:not(:first-of-type) {
    padding: ${vwCalc(6)} 0;
  }
`;

const Title = styled.li`
  margin-bottom: ${vwCalc(30)};
  font-size: ${vwCalc(22)};
  font-weight: 500;
  color: ${(props) => props.$titleColor || WHITE};
`;

const Line = styled.span`
  margin: 0 ${vwCalc(9)};
`;

const CopyRightWrapper = styled.div`
  display: flex;
  margin-top: ${vwCalc(210)};
  padding-top: ${vwCalc(32)};
  width: 100%;
  border-top: ${vwCalc(1)} solid ${(props) => props.$color || MAIN_IVORY};
  justify-content: space-between;
`;

const Footer = () => {
  const location = useLocation();

  if (!showFooterPath.includes(location.pathname)) {
    return null;
  }

  const defaultStyle = {
    bgColor: MAIN_ORANGE,
    color: MAIN_IVORY,
    titleColor: WHITE,
    logo: logoWhite,
  };

  const currentStyle =
    footerStyle.find((style) => style.path === location.pathname) ||
    defaultStyle;

  const { bgColor, color, titleColor, logo } = currentStyle;

  return (
    <>
      <FooterWrapper $bgColor={bgColor} $color={color}>
        <ImgBox src={logo} alt="OWN 로고" width={96} height={28} />
        <BasePretendard20 $color={color}>Own your own rest.</BasePretendard20>

        <Flex>
          {footerData.map((section, index) => (
            <Ul key={index}>
              <Title $titleColor={titleColor}>{section.title}</Title>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <span>{item.name}</span>
                  {item.englishName && (
                    <>
                      <Line aria-hidden={true}>|</Line>
                      <span>{item.englishName}</span>
                    </>
                  )}
                </li>
              ))}
            </Ul>
          ))}
        </Flex>

        <CopyRightWrapper $color={color}>
          <address>
            Copyright &copy; 2024 OWN. 나만의 휴식을 소유하다. Own your own
            rest.
          </address>
          <p>For your happiness</p>
        </CopyRightWrapper>
      </FooterWrapper>
    </>
  );
};

export default Footer;
