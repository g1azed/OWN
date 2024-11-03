import React , {useState} from 'react';
import { Reset } from "styled-reset";
import styled from 'styled-components'
import {colors, fontSize} from '../styles'
import introArrow from '../assets/brandingIntro/intro_arrow.svg'
import ownRepre from '../assets/brandingIntro/own.svg'
import estBg1 from '../assets/brandingIntro/est_bg_1.png'
import estBg2 from '../assets/brandingIntro/est_bg_2.png'
import estBg3 from '../assets/brandingIntro/est_bg_3.png'
import tiredLifeRelax from '../assets/brandingIntro/tiredRelax.png'

import OwnColorBg1 from '../assets/brandingIntro/OwnColorBg_1.png'
import OwnColorBg2 from '../assets/brandingIntro/OwnColorBg_2.png'
import OwnColorBg3 from '../assets/brandingIntro/OwnColorBg_3.png'
import OwnColorBg4 from '../assets/brandingIntro/OwnColorBg_4.png'

import Typo_K from '../assets/brandingIntro/typo_k.png'
import Typo_E from '../assets/brandingIntro/typo_e.png'
import Typo_Kimg from '../assets/brandingIntro/typo_kk.png'
import Typo_Eimg from '../assets/brandingIntro/typo_ee.png'
import Intro_logo from '../assets/brandingIntro/Intro_logo.png'
import Own_logo_1 from '../assets/brandingIntro/own_logo_1.png'
import Own_logo_2 from '../assets/brandingIntro/own_logo_2.png'
import Own_logo_3 from '../assets/brandingIntro/own_logo_3.png'
import Own_logo_4 from '../assets/brandingIntro/own_logo_4.png'
import Own_logo_5 from '../assets/brandingIntro/own_logo_5.png'

import Metapo_bg_1 from '../assets/brandingIntro/metapo_bg/metapo_1.png'
import Metapo_bg_2 from '../assets/brandingIntro/metapo_bg/metapo_2.png'
import Metapo_bg_4 from '../assets/brandingIntro/metapo_bg/metapo_4.png'
import Metapo_bg_6 from '../assets/brandingIntro/metapo_bg/metapo_6.png'
import Metapo_bg_8 from '../assets/brandingIntro/metapo_bg/metapo_8.png'
import Metapo_bg_9 from '../assets/brandingIntro/metapo_bg/metapo_9.png'

import Metapo_obj_1 from '../assets/brandingIntro/metapo_obj/metapo_1.png'
import Metapo_obj_2 from '../assets/brandingIntro/metapo_obj/metapo_2.png'
import Metapo_obj_4 from '../assets/brandingIntro/metapo_obj/metapo_4.png'
import Metapo_obj_6 from '../assets/brandingIntro/metapo_obj/metapo_6.png'
import Metapo_obj_8 from '../assets/brandingIntro/metapo_obj/metapo_8.png'
import Metapo_obj_9 from '../assets/brandingIntro/metapo_obj/metapo_9.png'
import OwnNametag from '../assets/brandingIntro/own_nametag.png'
import OwnStory from '../assets/brandingIntro/own_story.png'
import OwnInsta from '../assets/brandingIntro/own_insta.png'
import OwnMockup from '../assets/brandingIntro/own_mockup.png'

import IntroMainBg from '../assets/brandingIntro/introMainBg.gif'
import TiredOfLifeRelaxGif from '../assets/brandingIntro/TiredOfLifeRelaxGif.gif'


const IntroBrandingWrap = styled.div`
    margin: 7.29vw 10.2vw 0 10.2vw;
    position: relative;
    div.intro_main_bg{
        position: absolute;
        left: -8vw;
        bottom: -7.2vw;
    }
`
const MainButton = styled.button`
    margin: 0 0 0 2.6vh;
    width: 8.3vw;
    height: 8.3vw;
    background-color: ${colors.smallBlack};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 6vw;
        height: 6vw;
    }
`
const MainTextWrap = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 20px;
    div.main_text_1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 2.9vw 0 0;
    }
    h2:nth-child(2){
        margin : 0 0 0 11.7vw;
    }
    h2:nth-child(4){
        text-align: right;
    }
    p{
        font-size: ${fontSize.kSizeText20};
        line-height: 1.51vw;
        text-align: right;
    }
`
const MainText = styled.h2`
    font-size: ${fontSize.eSizeHead};
    font-weight: 500;
`

const CoreValueWrap = styled.div`
    margin : 18.64vw 6.87vw 0 6.87vw;
    display: flex;
    flex-direction: column;
    
`
const CoreValueText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 1.9vw;
    }
    h3{
        font-size: 3.125vw;
        color : ${colors.mainOrange};
        padding: 0.52vw 0 2.4vw 0;
        span{
            font-weight: 500;
        }
    }
    p{
        font-size: ${fontSize.kSizeText20};
        text-align: center;
        line-height: 1.51vw;
    }
`
const CoreValueImg = styled.div`
    margin-top: 6.61vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.56vw;
    div{
        background-color: #f4f4f4;
        padding: 24.8vw 0 1.35vw 1.8vw;
        width: 27.7vw;
        height: 29.1vw;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        span{
            font-size: ${fontSize.kSizeText20};
        }
        p{
            font-size: 1.66vw;
            font-weight: 500;
        }
    }
`

const HeadNum = styled.h4`
    font-size: ${fontSize.introNum};
    line-height: 138%;
`

const HeadText = styled.h4`
    white-space: nowrap;
    font-size: ${fontSize.introHead};
    line-height: 120%;
    font-weight: 600;
`
const IntroText = styled.p`
    font-size: ${fontSize.kSizeText24};
    line-height: 145%;
`

const TiredLifeRelaxWrap = styled.div`
    margin-top: 20.9vw;
    width: 100%;
    height: 105vw;
    background-image: url(${tiredLifeRelax});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${colors.smallBlack};
    padding: 17.39vw 10.42vw 0 10.42vw ;
    position: relative;
    img{
            position: absolute;
            left: 1.56vw;
            top: 3vw;
        }
    p{
        font-size: 6.25vw;
        line-height: 9.06vw;
        text-align: right;
        font-weight: 500;
        span{
            font-size: 6.25vw; 
            margin-right: 4.47vw;
        }
    }
    p.orange_typo{
        color: ${colors.mainOrange};

    }
    p.align_left{ text-align: left;}
    span.tired_relax_k{
        margin-top: 2.91vw;
        font-size:${fontSize.kSizeText20};
        display: block; 
        text-align: center;
    }
`
const OwnColorWrap = styled.div`
        margin-top: 19.89vw;
        h2{
            font-size: ${fontSize.introNum};
        }
        p{
            font-size: 1.25vw;
        }
        div.OwnColorBg{
            margin-top : 1.56vw;
            width : 100%;
            height: 50.83vw;                                                                                            
            background-image: url(${OwnColorBg1});
            background-size: cover;
            transition: 0.3s ease;
        }
`
const OwnColorText = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 0 10vw 0 5.14vw;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
const OwnColor = styled.div`
    margin-top: 13.28vw;
    height: 28.54vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.14vw;
    position: relative;
    div{ cursor: pointer; }
    p{
        transform: rotate(-90deg);
        transform-origin: top left;
        position: absolute;
        bottom: -4vw;
        padding-top: 1.19vw;
        padding-left: 1.56vw;
    }
    div.OwnColorSunset{
        width: 47.65vw;
        height: 100%;
        background-color: ${colors.mainOrange};
    }
    div.OwnColorSky{
        width: 29.27vw;
        height: 100%;
        background-color: ${colors.mainBlue};
    }
    div.OwnColorIvory{
        width: 9.79vw;
        height: 100%;
        background-color: ${colors.mainIvory};
    }
    div.OwnColorBeige{
        width: 9.79vw;
        height: 100%;
        background-color: ${colors.mainBeige};
    }
`

const OwnTypoWrap = styled.div`

`

const OwnTypoText = styled.div`
    margin: 24.94vw 10.31vw 6.71vw 5.41vw; 
    display: grid;
    grid-template-columns: 9.21vw 2fr 1fr;
    h4:nth-child(2){
        padding: 0 7.86vw 0 4.84vw;
    }
    h4:nth-child(5){
        padding: 0 7.86vw 0 4.84vw;
    }
`

const OwnTypo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    div{
        width: 50vw;
    }
    div:nth-child(1){
        background-image: url(${Typo_K});
        background-size: contain;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 31.4vw;
        padding: 5.88vw 0 9.68vw 4.58vw;
    }
    div:nth-child(2){
        padding: 5.99vw 4.58vw 2.44vw 3.33vw;
        background-color: ${colors.mainIvory};
    }
    div:nth-child(3){
        padding: 30.83vw 5.1vw 3.125vw 3.33vw;
        background-color: ${colors.mainIvory};
        span{
            font-size: 1.66vw;
            line-height: 130%;
        }
        p{
            font-size: 35.41vw;
            line-height: 1;
        }
    }
    div:nth-child(4){
        background-image: url(${Typo_E});
        background-size: cover;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5.99vw 0 3.125vw 3.33vw;
        gap: 48.59vw;
    }
    p.own_typo_p{
        font-size: 6.66vw;
        font-weight: 900;
        line-height: 110%;
        color: #fff;
    }
    span.own_typo_white{
        font-size: 1.66vw;
        line-height: 130%;
        color: #fff;
    }
`

const OwnLogoWrap = styled.div`
    div.own_logo_intro{
        width: 100%;
        height: 38.54vw;
        background-image: url(${Intro_logo});
        background-size: cover;
    }
`

const OwnLogoText = styled.div`
    display: flex;
    flex-direction: column;
    padding: 22.55vw 0 0 5.41vw;
    div{
        display: flex;
        justify-content: space-between;
        padding: 0  10vw 0  3.31vw; 
    }
`

const OwnLogoImgWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    img{ height: 100%; object-fit: cover;}
    img:nth-child(5){
        grid-column: 1 / span 2;
    }
`

const OwnMetapoWrap = styled.div`
    margin-top: 42.7vw;
    padding: 0 2.96vw;
`
const OwnMetapoText = styled.div`
    display: flex;
    gap: 2.96vw;
    padding: 0 4.79vw;
`
const OwnMetapo = styled.div`
    margin-top: 4.79vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.93vw;
    img:hover{
            transform: rotate(-360deg);
        }
    p.metapo_text{
        width: 20.4vw;
        font-size: ${fontSize.kSizeText20};
        font-weight: 400;
        line-height: 1.77vw;
        color: ${colors.smallBlack};
    }
    div{
        height: 30.4vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.82vw;
        background-size: cover;
        p{
            font-size: 2.6vw;
            font-weight: 700;
            line-height: 3.9vw;
            color: ${colors.mainIvory};
        }
        img{
            max-width: 15.88vw;
            transition: transform 1.5s ease-in-out;
           
        }    

    }
    div:nth-child(1){ background-image: url(${Metapo_bg_1})};
    div:nth-child(2){ background-image: url(${Metapo_bg_2})};
    div:nth-child(4){ background-image: url(${Metapo_bg_4})};
    div:nth-child(6){ background-image: url(${Metapo_bg_6})};
    div:nth-child(8){ background-image: url(${Metapo_bg_8})};
    div:nth-child(9){ background-image: url(${Metapo_bg_9})};
    
`
const OwnMockWrap = styled.div`
    margin-top: 0.88vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.93vw;
    img:nth-child(1), img:nth-child(4){
        grid-column: 1 / span 2;
    }
    img{ height: 100%; object-fit: cover;}
`



const IntroBranding = () => {

    /* 마우스 오버 시 백그라운드 이미지교체 */
    const [backgroundImage, setBackgroundImage] = useState('');

    // 각 색상에 따라 배경 이미지를 변경하는 함수
    const handleMouseEnter = (imageUrl) => {
        setBackgroundImage(`url(${imageUrl})`);
    };

    // 마우스가 떠나면 배경 이미지를 초기화하는 함수
    const handleMouseLeave = () => {
        setBackgroundImage('');
    };



    return (
        <>
            <Reset />
            <IntroBrandingWrap>
                <MainTextWrap>
                    <div className="main_text_1">
                        <MainButton type="button"> <img src={introArrow} /> </MainButton>
                        <MainText> BRANDING OF </MainText>
                    </div>
                    <MainText> OWN </MainText>
                    <MainText> TO FIND </MainText>
                    <MainText> YOUR REST </MainText>
                    <p> 사람들은 바쁘게 흘러가는 현대사회로 인해, 쉴 수 없어지면서 점점 휴식을 잊어버리게 <br/> 
                        되었습니다. 오운은 여러분이 휴식을 취하면서 스스로를 찾아 나갈 수 있도록 돕습니다.</p>
                </MainTextWrap>
                <div className="intro_main_bg">
                    <img src={IntroMainBg} />
                </div>
            </IntroBrandingWrap>
            <CoreValueWrap>
                <CoreValueText>
                    <img src={ownRepre} />
                    <h3> WE HAVE <span> ESTABLISH </span> CORE VALUE </h3>
                    <p>삶에 지쳐 무엇을 해야할지, 어떻게 쉬어야할지 모르는 사람들에게 제대로 된 휴식을 알려주고, 스스로를 <br />
                    찾아나갈 수 있는 기회를 제공합니다. OWN 서비스를 이용한 사람들은 앞으로의 삶에 있어 제대로 된 <br/>
                    휴식을 취하고, 스스로가 원하는 미래를 그려나갈 수 있도록 합니다.</p>
                </CoreValueText>
                <CoreValueImg>
                    <div style={{backgroundImage : `url(${estBg1})`}}>
                        <span> CORE VALUE 01</span>
                        <p> ANALOGUE </p>
                    </div>
                    <div style={{backgroundImage : `url(${estBg2})`}}>
                        <span> CORE VALUE 02 </span>
                        <p> REST </p>
                    </div>
                    <div style={{backgroundImage : `url(${estBg3})`}}>
                        <span> CORE VALUE 03</span>
                        <p> EXPERIENCE </p>
                    </div>
                </CoreValueImg>
            </CoreValueWrap>
            <TiredLifeRelaxWrap>
                <img src={TiredOfLifeRelaxGif} />
                <p>WE HELP PEOPLE WHO ARE </p>
                <p className="orange_typo"> TIRED OF LIFE RELAX </p>
                <p className="align_left"> <span> AND, </span> FIND THEMSELVES.</p>
                <span className="tired_relax_k"> 우리는 삶에 지친 사람들이 휴식을 소유하며, 자신을 찾아나갈 수 있도록 돕습니다. </span>
            </TiredLifeRelaxWrap>
            <OwnColorWrap>
                <OwnColorText>
                    <div>
                        <HeadNum> (01) </HeadNum>
                        <IntroText> 오운의 컬러는 친환경적인 초록과 아날로그적인 베이지, 생기 넘치는 <br/>
                            오렌지 포인트를 바탕으로 다채로운 컬러를 활용하여 오운의 사용자들에게 <br/>
                            활기찬 느낌을 전달합니다.  </IntroText>
                        <HeadText> OWN'S </HeadText>
                    </div>
                    <HeadText> NATURAL COLORS </HeadText>
                </OwnColorText>
                <OwnColor>
                    <div className="OwnColorSunset" 
                    onMouseEnter={() => handleMouseEnter({OwnColorBg1})}
                    onMouseLeave={handleMouseLeave}> <p> SUNSET RED <br/> FF562F </p> </div>
                    <div className="OwnColorSky"
                    onMouseEnter={() => handleMouseEnter(OwnColorBg2)}
                    onMouseLeave={handleMouseLeave}> <p> SKY BLUE <br/> 83CBFA </p> </div>
                    <div className="OwnColorIvory" 
                    onMouseEnter={() => handleMouseEnter(OwnColorBg3)}
                    onMouseLeave={handleMouseLeave}> <p> PEACEFUL IVORY <br/> FAF4F4 </p> </div>
                    <div className="OwnColorBeige" 
                    onMouseEnter={() => handleMouseEnter(OwnColorBg4)}
                    onMouseLeave={handleMouseLeave}> <p> BEED BEIGE <br/> CDBCA5 </p> </div>
                </OwnColor>
                <div className="OwnColorBg" style={{ backgroundImage: backgroundImage,}}>

                </div>
            </OwnColorWrap>
            <OwnTypoWrap>
                <OwnTypoText>
                    <HeadNum> (02) </HeadNum>
                    <HeadText> CLEARLY </HeadText>
                    <div> </div>
                    <div> </div>
                    <HeadText> OWN TYPO </HeadText>
                    <IntroText> 오운의 타이포는 한문 프리텐다드, 영문 포핀스를 기반으로 하여 사용자들에게 오운이 말하고자 하는 언어를 명확하게 전달합니다.</IntroText>
                </OwnTypoText>
                <OwnTypo>   
                    <div>
                        <p className="own_typo_p"> 나만의 휴식을 <br/> 소유하다 </p>
                        <span className="own_typo_white">PRETENDARD 프리텐다드 </span>
                    </div>
                    <div>
                        <img src={Typo_Kimg} />
                    </div>
                    <div>
                    <img src={Typo_Eimg} />
                    </div>
                    <div> 
                        <p className="own_typo_p"> REST WITH OWN </p>
                        <span className="own_typo_white"> POPPINS 포핀스 </span>
                    </div>
                </OwnTypo>
            </OwnTypoWrap>
            <OwnLogoWrap>
                <OwnLogoText>
                    <HeadNum> (03) </HeadNum>
                    <div>
                        <HeadText> OWN LOGO </HeadText>
                        <IntroText> W와 N을 연결하여 제작한 기본 형태를 기반으로 <br/> 다양한 표정을 활용한 방안을 매체별 특성에 맞게 <br/> 효과적으로 전달합니다. </IntroText>
                    </div>
                </OwnLogoText>
                <div className="own_logo_intro"> </div>
                <OwnLogoImgWrap>
                    <img src={Own_logo_1} />
                    <img src={Own_logo_2} />
                    <img src={Own_logo_3} />
                    <img src={Own_logo_4} />
                    <img src={Own_logo_5} />
                </OwnLogoImgWrap>
            </OwnLogoWrap>

            <OwnMetapoWrap>
                <OwnMetapoText>
                    <HeadNum> (04) </HeadNum>
                    <HeadText> OWN METAPO </HeadText>
                </OwnMetapoText>
                <OwnMetapo>
                    <div> <img src={Metapo_obj_1}/> <p> ONE DAY </p> </div>
                    <div> <img src={Metapo_obj_2} /> <p> VACATION </p> </div>
                    <div> <p className="metapo_text"> 오운의 메타포는 각 키트 테마의 형상을
                                본 뜬 형태로 제작되었습니다. 메타포를 
                                사용함으로써 각 테마의 의미를 더 
                                명확하게 해주고, 사용자들에게 친근하게 
                                다가갈 수 있습니다.  </p>
                    </div>
                    <div> <img src={Metapo_obj_4} /> <p> CREATIVE </p> </div>
                    <div> </div>
                    <div> <img src={Metapo_obj_6} /> <p> GAME </p> </div>
                    <div> </div>
                    <div> <img src={Metapo_obj_8} /> <p> SPOT </p> </div>
                    <div> <img src={Metapo_obj_9} /> <p> RANDOM </p> </div>
                </OwnMetapo>
            </OwnMetapoWrap>
            <OwnMockWrap>
                <img src= {OwnNametag} />
                <img src= {OwnStory} />
                <img src= {OwnInsta} />
                <img src= {OwnMockup} />
            </OwnMockWrap>
        </>
    );
};

export default IntroBranding;