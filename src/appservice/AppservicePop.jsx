import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import homePop_1 from  '../assets/appservice/home_pop_1.png'
import homePop_2 from  '../assets/appservice/home_pop_2.png'
import homePop_3 from  '../assets/appservice/home_pop_3.png'

// 스타일 컴포넌트 정의
const HomePopupWrap = styled.div`
    position: relative;

`;

const PopImg = styled.img.attrs((props) => ({
    style: {
        bottom: props.isVisible ? props.visibleBottom : props.hiddenBottom,
        },
    }))`
        position: absolute;
        opacity: ${(props) => (props.isVisible ? 1 : 0)};
        transition: opacity 0.5s ease, bottom 0.5s ease;
`;


const AppservicePop = () => {
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const triggerPosition = window.innerHeight * 1.3;
            const elementPosition = document.querySelector('.home_popup_wrap')?.getBoundingClientRect().top;
    
            if (elementPosition < triggerPosition) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <HomePopupWrap className="home_popup_wrap">  
            <PopImg src={homePop_1} className="animated-bottom"         
                isVisible={isVisible} 
                visibleBottom="15.6vw" 
                hiddenBottom="0px" />
            <PopImg src={homePop_2} className="animated-bottom"         
                isVisible={isVisible} 
                visibleBottom="41.5vw" 
                hiddenBottom="0px" />
            <PopImg src={homePop_3} className="animated-bottom"         
                isVisible={isVisible} 
                visibleBottom="32.1vw" 
                hiddenBottom="0px" />
        </HomePopupWrap>
    );
};

export default AppservicePop;