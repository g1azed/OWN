import styled from "styled-components";
import { useEffect, useState } from "react";
import { SectionsContainer, Section } from "react-fullpage";
import { colors } from "../styles";
import MainHome from "./brandStory/MainHome";
import Overflow1 from "./brandStory/Overflow1";
import Overflow2 from "./brandStory/Overflow2";
import Overflow3 from "./brandStory/Overflow3";
import Survey from "./brandStory/Survey";
import Needs from "./brandStory/Needs";
import PainPoint from "./brandStory/PainPoint";
import InsightIntro from "./brandStory/InsightInro";
import Insight from "./brandStory/Insight";
import InsightResult from "./brandStory/InsightResult";
import Solution from "./brandStory/Solution";
import Outro from "./brandStory/Outro";
import vwCalc from "../util/vwCalc";
import { useColor } from "../ColorContext";
import img1 from "../assets/brandStory/mainHome_bg1.webp";
import img2 from "../assets/brandStory/mainHome_bg2.webp";
import img3 from "../assets/brandStory/mainHome_bg3.webp";
import img4 from "../assets/brandStory/mainHome_bg4.webp";
import img5 from "../assets/brandStory/mainHome_bg5.webp";
import img6 from "../assets/brandStory/mainHome_bg6.webp";
import img7 from "../assets/brandStory/mainHome_bg7.webp";
import img8 from "../assets/brandStory/mainHome_bg8.webp";
import getRandomImage from "../util/getRandomImage";

const MAIN_ORANGE = colors.mainOrange;
const MAIN_IVORY = colors.mainIvory;
const MAIN_BEIGE = colors.mainBeige;
const SMALL_BLACK = colors.smallBlack;
const WHITE = " #FFFFFF";

const images = [
  { url: img1, color: WHITE },
  { url: img2, color: WHITE },
  { url: img3, color: MAIN_IVORY },
  { url: img4, color: MAIN_ORANGE },
  { url: img5, color: MAIN_IVORY },
  { url: img6, color: MAIN_ORANGE },
  { url: img7, color: MAIN_ORANGE },
  { url: img8, color: MAIN_IVORY },
];

const backgroundColors = {
  0: "transparent",
  7: SMALL_BLACK,
  8: SMALL_BLACK,
  9: SMALL_BLACK,
  default: MAIN_IVORY,
};

const SectionWrapper = styled.div`
  position: relative;
  overflow-x: ${(props) => (props.$isOverflowHidden ? "hidden" : "auto")};
  overflow-y: ${(props) => (props.$isScrollable ? "auto" : "hidden")};
  height: 100vh;
  background-color: ${(props) =>
    backgroundColors[props.$index] || backgroundColors.default};
`;

const StyledNavigation = styled.div`
  .Navigation {
    right: ${vwCalc(5)} !important;
  }

  .Navigation a {
    margin: ${vwCalc(16)} !important;
    padding: ${vwCalc(5.5)} !important;
    background-color: ${MAIN_BEIGE} !important;
    opacity: 0.6;

    &:hover {
      background-color: ${MAIN_ORANGE} !important;
      opacity: 1;
    }
  }

  .Navigation a[style*="scale"] {
    background-color: ${MAIN_ORANGE} !important;
    opacity: 1;
  }
`;

const BrandStory = () => {
  const { setColor } = useColor();
  const [initialActiveSection, setInitialActiveSection] = useState(0);
  const [selectedImage] = useState(() => getRandomImage(images));

  useEffect(() => {
    setColor(selectedImage.color);
  }, [setColor, selectedImage]);

  const onScroll = (p) => {
    const currentSection = p.activeSection;

    if (currentSection === 0) {
      setColor(selectedImage.color);
    } else {
      setColor(MAIN_ORANGE);
    }

    setInitialActiveSection(currentSection);
  };

  const scrollToTop = () => {
    setInitialActiveSection(0);
  };

  const sections = [
    {
      content: (
        <MainHome
          color={selectedImage.color}
          backgroundImage={selectedImage.url}
        />
      ),
    },
    { content: <Overflow1 /> },
    { content: <Overflow2 />, isOverflowHidden: true },
    { content: <Overflow3 /> },
    { content: <Survey /> },
    { content: <Needs /> },
    { content: <PainPoint /> },
    { content: <InsightIntro /> },
    { content: <Insight /> },
    { content: <InsightResult /> },
    { content: <Solution />, isScrollable: true },
    { content: <Outro scrollToTop={scrollToTop} /> },
  ];

  const options = {
    scrollCallback: onScroll,
    sectionClassName: "section",
    anchors: [
      "mainhome",
      "overflow1",
      "overflow2",
      "overflow3",
      "survey",
      "needs",
      "painPoint",
      "insight_intro",
      "insight",
      "insight_result",
      "solution",
      "outro",
    ],
    scrollBar: false,
    navigation: true,
    arrowNavigation: true,
    verticalAlign: false,
    scrollingSpeed: 700,
  };

  return (
    <StyledNavigation $activeColor={colors.mainOrange}>
      <SectionsContainer {...options} activeSection={initialActiveSection}>
        {sections.map((section, index) => (
          <Section key={index} className={`section${index + 1}`}>
            <SectionWrapper
              $index={index}
              $isOverflowHidden={section.isOverflowHidden || false}
              $isScrollable={section.isScrollable || false}
            >
              {section.content}
            </SectionWrapper>
          </Section>
        ))}
      </SectionsContainer>
    </StyledNavigation>
  );
};

export default BrandStory;
