import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CartPopupImg1 from '../assets/appservice/restingPopup_1.png'
import CartPopupImg2 from '../assets/appservice/restingPopup_2.png'
import CartPopupImg3 from '../assets/appservice/restingPopup_3.png'


const CartImgWrap = styled.div`

`

const CartImg = styled.img.attrs((props) => ({
    style: {
        bottom: props.isVisible ? props.visibleBottom : props.hiddenBottom,
        },
    }))`
        position: absolute;
        opacity: ${(props) => (props.isVisible ? 1 : 0)};
        transition: opacity 0.5s ease, bottom 0.5s ease;
`;


const AppServiceCartPop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const triggerPosition = window.innerHeight * 0.4;
            const elementPosition = document.querySelector('.resting_cart_img_wrap')?.getBoundingClientRect().top;
    
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
        <CartImgWrap className="resting_cart_img_wrap">
            <CartImg src={CartPopupImg1} 
                isVisible={isVisible} 
                visibleBottom="31.56vw" 
                hiddenBottom="0px"
            />
            <CartImg src={CartPopupImg2} 
                isVisible={isVisible} 
                visibleBottom="11.4vw" 
                hiddenBottom="0px"
            />
            <CartImg src={CartPopupImg3} 
                isVisible={isVisible} 
                visibleBottom="13.95vw" 
                hiddenBottom="0px"
            />
        </CartImgWrap>
    );
};

export default AppServiceCartPop;