/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState} from 'react';
import styled, { keyframes } from 'styled-components';
import {colors, fontSize} from '../styles'
import useScrollEvent from '../hook/useScrollEvent'
import useAnimateBottom from '../hook/useAnimateBottom';

import ServiceMainImg from '../assets/appservice/appserv_main.png'
import personal_01 from '../assets/appservice/personal_01.gif'
import personal_02 from '../assets/appservice/personal_02.gif'
import personal_03 from '../assets/appservice/personal_03.gif'
import personal_04 from '../assets/appservice/personal_04.gif'
import ization_arrow from '../assets/appservice/ization_arrow.png'
import ization_etc from '../assets/appservice/ization_etc.png'


import kit_1 from '../assets/appservice/kit_1.png'
import kit_2 from '../assets/appservice/kit_2.png'
import kit_3 from '../assets/appservice/kit_3.png'
import kit_4 from '../assets/appservice/kit_4.png'
import kit_5 from '../assets/appservice/kit_5.png'
import kit_6 from '../assets/appservice/kit_6.png'

import ChooseMonthBg from '../assets/appservice/ChooseMonthBg.png'
import homeBgImg from '../assets/appservice/home_bg.png'
import homeGif from '../assets/appservice/home_gif.gif'
import homePop_1 from  '../assets/appservice/home_pop_1.png'
import homePop_2 from  '../assets/appservice/home_pop_2.png'
import homePop_3 from  '../assets/appservice/home_pop_3.png'


import restingImg from '../assets/appservice/resting_statistic.png'
import restingCartImg from '../assets/appservice/restingCartImg.png'

import Month_MotionOn from '../assets/appservice/month_motion_on.jpg'

import Statis_img_1 from '../assets/appservice/statis_img_1.gif'
import Statis_img_2 from '../assets/appservice/statis_img_2.gif'
import Statis_img_3 from '../assets/appservice/statis_img_3.gif'
import Statis_bar from '../assets/appservice/statistic_bar.png'

import RecordImg from '../assets/appservice/record_img.png'
import Wish_img_1 from '../assets/appservice/wish_1.gif'
import Wish_img_2 from '../assets/appservice/wish_2.png'
import WishUnion from '../assets/appservice/Union.png'
import Bottom from '../assets/appservice/appservice_bottom.png'

import AppServiceLine from './AppServiceLine'
import AppServicePop from './AppservicePop'
import AppServiceCartPop from './AppServiceCartPop'


const AppServiceHome = styled.div`
    width: 100%;
    height: 56.25vw;
    padding: 8.33vw 4.27vw 0 11.7vw;
    background-color: ${colors.mainOrange};
    position: relative;
    h1{
        font-size: 5.72vw;
        color: #fff;
        line-height: 6.3vw;
        font-weight: 600;
        letter-spacing: -3%;
    }
    p{
        margin-top: 1.3vw;
        font-size: ${fontSize.kSizeText20};
        color: #fff;
        line-height: 1.51vw;
    }
    img{
        width: 66.6vw;
        position: absolute;
        transform: rotate(-0.89deg);
        bottom: -10vw;
        right: 0.52vw;

    }
`

const AppServiceH2 = styled.h2`
    font-size: 3.54vw;
    color: ${ (props) => props.isBgOrange ?  '#ffffff' : colors.smallBlack };
    font-weight: 600;
    line-height: 3.85vw;
    text-transform: uppercase;
    text-align: center;
`
const AppServiceH4 = styled.h4`
    font-size: ${fontSize.kSizeText20};
    color: ${ (props) => props.isBgOrange ?  '#ffffff' : colors.smallBlack };
    margin-top: 1.56vw;
    text-align: center;
    line-height: 1.51vw;
`
const PersonalIzation = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10.9vw 10.41vw 0 10.41vw;
    div.persalIzation_wrap{
        display: flex;
        gap: 4.92vw;

    }
`
const PersonalIzationImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    &:nth-child(1),&:nth-child(2),&:nth-child(3){
        padding-bottom: 0.96vw;
        position: relative;
        .ization_arrow{ 
            width: 3.69vw;
            position: absolute;
            top: 8.5vw; right: -5vw;
        }
    }
    &:nth-child(4){
        position: relative;
        .ization_etc{
            width: 29.1vw;
            position: absolute;
            top: -5vw;
            left: -4vw;
        }
    }
    p:nth-child(1){
        color: ${colors.mainOrange};
        font-size: 1.56vw;
        font-weight: 500; 
    }
    p:nth-child(2){
        font-size: 1.14vw;
        font-weight: 500; 
        margin: 0.26vw 0 1.56vw 0;
    }
    p.recommand_personal{
        font-size: 1.56vw;
        color: ${colors.mainOrange};
        font-weight: 700;
        margin-bottom: 1.35vw;

    }
`
const VariousKitWrap = styled.div`
    padding: 11.87vw 13.54vw 0 10.41vw;
    h2.various_h2{
        text-align: start;
    }
    h5{
        margin: 4.42vw 0 0.57vw 0;
        font-size: ${fontSize.kSizeHead};
        color: ${colors.smallBlack};
        line-height: 1.96vw;
    }
`
const VariousTypes = styled.div`
    margin: 0.57vw 0 2.6vw 0;
    background: ${colors.mainIvory};
    border-radius: 3.22vw;
    padding: 3.62vw 4.47vw 4.47vw 3.22vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.85vw;
        p{ 
            padding-top: 2.44vw;
            font-size: 1.04vw;
            line-height: 1.51vw;
        }
        div.variousType_img_wrap{

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2.33vw;
            text-align: center;
            img{
                width: 5.26vw;
                margin-bottom: 1.25vw;
            }
            span{
                font-size: 0.88vw;
            }
    }
`
const ChooseMonth = styled.div`
    width: auto;
    height: 76.04vw;
    padding: 4vw 0 5.15vw 0;
    background: url(${ChooseMonthBg}) no-repeat;
    background-size: contain;
    background-color: ${colors.mainIvory};
    border-radius: 3.22vw;
    position: relative;
    h2.Choosemonth_h2{
        text-align: end;
        margin: 2.23vw 3.125vw 3.125vw 0;
    }
    h4.Choosemonth_h4{
        text-align: end;
        margin-right: 3.125vw;
    }
    .month_motion_wrap{
        position: absolute;
        top: 14vw; left: 14.5vw;
        display: inline-block;
        overflow: hidden;
        width: 25.625vw;
        height: 55.56vw;
        border-radius: 48px;
        border: 0.256vw solid black;
        .phone_head{
            z-index: 2;
            position: absolute;
            top: 0.8vw; left: 8.6vw;
            width:8.125vw;
            height: 2.34vw;
            background-color: #121212;
            border-radius: 1.35vw;
        }
    }
    
`
const boxFade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
` 
const HomeWrap = styled.div`
    margin-top: 4.16vw;
    padding: 6.51vw 0 0 0;
    height: 72.13vw;
    background-color: ${colors.mainIvory};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    h4{
        padding-bottom: 1.77vw;
    }
    img.home_bg{
        width: auto;
        height: 55.46vw;
    }
    img.home_gif{
        position: absolute;
        bottom: 0;
        width: 25.53vw;
        height: auto;
    }
    .home_popup_wrap{
        width: 100%;
        position: relative;
        .animated-bottom {
            transition: bottom 1.3s ease-in-out; /* 부드러운 애니메이션 효과 */
            bottom: 0; /* 초기 값 */
        }
        img{ position: absolute;}
        img:nth-child(1){
            width: 18.85vw;
            left: 2vw;
            bottom:0;
            transition: bottom 0.5s ease-in-out; 
            animation: ${boxFade} 0.5s linear;
        }
        img:nth-child(2){
            width: 32.76vw;
            right: 0;
        }
        img:nth-child(3){
            width: 27.96vw;
            right: 0;
        }
    }
`


const RestingWrap = styled.div`
    padding-top : 6.92vw;
    background-color: ${colors.mainOrange};
`

const StatisWrap = styled.div`
    position: relative;
    .statis_bar{
        width: 60.88vw;
        position: absolute;
        left:50%;
        top: 9.94vw;
        transform:translateX(-50%);
        
    }
    .statis_img_wrap{
        padding: 3.43vw 10.41vw 0 10.41vw;
        display: flex;
        gap: 8.95vw;
        justify-content: space-between;
        align-items: flex-start;
        img{
            width: 20.36vw;
            object-fit: contain;
        }
        img:nth-child(2){
            margin-top: 4.84vw;
        }
        img:nth-child(3){
            margin-top: 9.53vw;
        }
    }
`
const CartWrap = styled.div`
    padding-top: 9.89vw;
    width: auto;

    div.resting_cart_img_wrap{
        z-index: 0;
        background: url(${restingCartImg}) no-repeat;
        background-size: contain;
        background-position: center;
        position: relative;
        height: 63vw;
        .animated-bottom {
            animation: ${boxFade} 1.3s linear;
            transition: bottom 1.3s ease-in-out;
            bottom: 0;
        }
        img{ position: absolute; }
        img:nth-child(1){
            width: 17.18vw;
            left: 15.62vw;
        }
        img:nth-child(2){
            width: 17.18vw;
            left: 7.81vw; 
        }
        img:nth-child(3){
            width: 16.71vw;
            right: 10.4vw;
        }

    }
`

const RecordWrap = styled.div`
    padding-top: 10.72vw;
    z-index: 1;
    background: #fff;
    img{
        width: 87.08vw;
        display: block;
        margin-left: auto ;
    }
`
const Rotate = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`
const WishWrap = styled.div`
    background: #fff;
    border-radius: 0 50% 50% 0 ;
    div.wish_img_wrap{
        position: relative;
        height: 65vw;
        img{ 
            width: 22.9vw; 
            position: absolute;
        }
        img:nth-child(1){
            top: 2.6vw;
            left: 12.86vw;
        }
        img:nth-child(2){
            z-index: 1;
            top: 12.23vw;
            left: 41.66vw;
        }
        img:nth-child(3){
            width: 26.875vw;
            right: 12.08vw;
            top: 2.7vw;
            animation: ${Rotate} 7s infinite linear;
        }
    }
`


const AppService = () => {

        /* Each Month 애니메이션  */
        // 마우스 오버 상태 관리
        const [isHovered, setIsHovered] = useState(false);

        // 마우스 오버 상태에 따른 translateY 설정
        const imgStyle = {
            transform: isHovered ? 'translateY(-347vw)' : 'translateY(0px)',
            transition: 'transform 14s ease-in',
        }; 
    

        
    return (
        <>
            <AppServiceHome>
                <h1> OWN <br/> SERVICE</h1>
                <p> 오운은 한 달에 한 번 사용자들에게 키트를 전달합니다. <br />
                    사용자들이 키트를 사용하는 동안 온전한 휴식을 취하도록 <br />
                    휴식을 선물할 수 있는 방안을 디지털 앱으로 제공합니다.
                </p>
                <img src= {ServiceMainImg}/>
            </AppServiceHome>
            <PersonalIzation>
                <AppServiceH2> Personal <br/> ization </AppServiceH2>
                <AppServiceH4>
                취향 질문을 통해 사용자 개인화를 진행하여 <br/>
                취향에 딱 맞는 맞춤 키트를 추천합니다.
                </AppServiceH4>
                <div className="persalIzation_wrap">
                    <PersonalIzationImg>
                        <p> 01 </p>
                        <p> 기본 정보 인식 </p>
                        <img src={personal_01} />
                        <img src={ization_arrow} className="ization_arrow"/>
                    </PersonalIzationImg>
                    <PersonalIzationImg>
                        <p> 02 </p>
                        <p> 휴식 필요성 체크 </p>
                        <img src={personal_02} />
                        <img src={ization_arrow} className="ization_arrow"/>
                    </PersonalIzationImg>
                    <PersonalIzationImg>
                        <p> 03 </p>
                        <p> 관심 분야 </p>
                        <img src={personal_03} />
                    </PersonalIzationImg>
                    <PersonalIzationImg>
                        <img src={ization_etc} className="ization_etc" />
                        <p className="recommand_personal"> 추천 완료! </p>
                        <img src={personal_04} />
                    </PersonalIzationImg>
                </div>
            </PersonalIzation>
            <VariousKitWrap>
                <AppServiceH2> Various kits provided <br/> every month </AppServiceH2>
                <AppServiceH4> 6가지 테마의 아날로그 키트를 제공하여 디지털의 사용을 줄이고, <br/>
                각자가 원하는 방식에서 본인의 취향대로 휴식을 취할 수 있도록 돕습니다.  </AppServiceH4>

                <h5>( 01 ) 6 types provided - 6가지 종류 제공 </h5>
                <VariousTypes>
                    <AppServiceH2 className="various_h2">Activities <br/> of 6 kits </AppServiceH2>
                    <div className="variousType_img_wrap">
                            <div> 
                                <img src={kit_1} />
                                <span> SPOT </span>
                            </div>
                            <div> 
                                <img src={kit_2} />
                                <span> CREATE </span>
                            </div>
                            <div> 
                                <img src={kit_4} />
                                <span> VACTION </span>
                            </div>
                            <div> 
                                <img src={kit_3} />
                                <span> GAME </span>
                            </div>
                            <div> 
                                <img src={kit_5} />
                                <span> ONE DAY </span>
                            </div>
                            <div> 
                                <img src={kit_6} />
                                <span> RANDOM </span>
                            </div>
                        </div>
                </VariousTypes>

                <h5>( 02 ) Choose one per month - 매달마다 하나씩 선택하는  </h5>
                <ChooseMonth             
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <AppServiceH2 className="Choosemonth_h2">Choose the <br/> break you want <br/> each month </AppServiceH2>
                    <AppServiceH4 className="Choosemonth_h4">키트에 대한 상세페이지를 통해 사용자가 원하는 휴식 <br/>
                    활동을 즐길 수 있도록 정보를 제공하고, 매 달마다 키트를 <br/> 선택하여 신청한 후에 키트를 배송 받을 수 있습니다.  </AppServiceH4>
                    <div className="month_motion_wrap">
                        <div className="phone_head"></div>
                        <img src={Month_MotionOn} style={imgStyle}/>
                    </div>

                </ChooseMonth>
            </VariousKitWrap>
            <HomeWrap>
                <AppServiceH2> home </AppServiceH2>
                <AppServiceH4> 활동중인 키트는 홈화면 일러스트로 진행도 확인이 가능하고, <br/> 여러 알림으로 원활한 활동을 돕습니다. </AppServiceH4>
                <img src={homeBgImg} className="home_bg"/>
                <img src={homeGif} className="home_gif"/>
                <AppServicePop />
                <AppServiceLine />
            </HomeWrap>
            <RestingWrap>
                <StatisWrap>
                    <AppServiceH2 isBgOrange> My resting <br/> statistics </AppServiceH2>
                    <AppServiceH4 isBgOrange>키트 활동을 하며 얼만큼 효과적으로 <br/>
                    쉬었는지 확인할 수 있습니다. </AppServiceH4>  
                    <img src={Statis_bar} className="statis_bar"/>
                    <div className="statis_img_wrap">
                        <img src={Statis_img_1} />
                        <img src={Statis_img_2} />
                        <img src={Statis_img_3} />
                    </div>
                    
                </StatisWrap>
                <CartWrap>
                    <AppServiceH2 isBgOrange> resting cart </AppServiceH2>
                    <AppServiceH4 isBgOrange> 진행 완료한 활동은 간단한 후기 작성으로 카드를 <br/> 획득할 수 있습니다. </AppServiceH4>
                    <AppServiceCartPop />

                </CartWrap>
            </RestingWrap>
            <RecordWrap>
                <AppServiceH2> record </AppServiceH2>
                <AppServiceH4> 레코드에서 그동안 활동했던 키트의 <br/> 기록들을 확인할 수 있습니다. </AppServiceH4>
                <img src={RecordImg} />
            </RecordWrap>
            <WishWrap>
                <AppServiceH2> wish </AppServiceH2>
                <AppServiceH4> 추가로 원하는 활동이 있다면 <br/> 위시를 작성할 수 있습니다.</AppServiceH4>
                <div className="wish_img_wrap">
                    <img src={Wish_img_1} />
                    <img src={Wish_img_2} />
                    <img src={WishUnion}/>
                </div>
                <img src={Bottom} />
            </WishWrap>
        </>
    );
};

export default AppService;
