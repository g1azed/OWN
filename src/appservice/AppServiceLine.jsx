import React, {useState} from 'react';
import styled, { keyframes } from "styled-components";

import useIntersectionObserverRef from "../hook/useIntersectionObserverRef";
import {ReactComponent as Left_1} from '../assets/appservice/linedrawing/left_1.svg'
import {ReactComponent as Right_1} from '../assets/appservice/linedrawing/right_1.svg'
import {ReactComponent as Right_2} from '../assets/appservice/linedrawing/right_2.svg'
import {ReactComponent as Right_3} from '../assets/appservice/linedrawing/right_3.svg'


const Wrap = styled.div`
    width: 100%;
    position: relative;
`
const drawLine_Left = keyframes`
    from {
        opacity:0;
        stroke-dashoffset: -1200;
    }
    to {
        opacity:1;
        stroke-dashoffset: 0;
    }
`;
const drawLine_Right = keyframes`
    from {
        opacity:0;
        stroke-dashoffset: 1200;
    }
    to {
        opacity:1;
        stroke-dashoffset: 0;
    }
`;

/* svg component */
const Left_line = styled(Left_1)`
    height: auto;
    position: absolute;
    top: -15vw;
    left: 18vw;
    width: 18.125vw;
    path {
        stroke-dasharray: 1200;
        stroke-dashoffset: 0;
        animation: ${(props) => (props.$isVisible ? drawLine_Left : "none")} 
        1.3s ease-in-out 0.1s forwards;
    }
`
const Right_line_1 = styled(Right_1)`
    height: auto;
    position: absolute;
    top: -31vw;
    right: 32vw;
    width: 7.86vw;
    path {
        stroke-dasharray: 1200;
        stroke-dashoffset: 0;
        animation: ${(props) => (props.$isVisible ? drawLine_Right : "none")} 
        1.3s ease-in-out  0.1s forwards;
    }
`
const Right_line_2 = styled(Right_2)`
    height: auto;
    position: absolute;
    top: -31vw;
    right: 19.5vw;
    width: 18.28vw;
    path {
        stroke-dasharray: 1200;
        stroke-dashoffset: 0;
        animation: ${(props) => (props.$isVisible ? drawLine_Right : "none")} 
        1.3s ease-in-out 0.1s forwards;
    }
`
const Right_line_3 = styled(Right_3)`
    height: auto;
    position: absolute;
    top: -21vw;
    right: 19.5vw;
    width: 18.28vw;
    path {
        stroke-dasharray: 1200;
        stroke-dashoffset: 0;
        animation: ${(props) => (props.$isVisible ? drawLine_Right : "none")} 
        1.3s ease-in-out 0.1s forwards;
    }
`
const AppServiceLine = () => {

    const [isVisible, setIsVisible] = useState(false);

    const ref = useIntersectionObserverRef({
        callback: () => setIsVisible(true),
        options: { threshold: 0.1 },
    });

    

    return (
        <Wrap ref={ref}>
            <Left_line $isVisible={isVisible}/>
            <Right_line_1 $isVisible={isVisible} />
            <Right_line_2 $isVisible={isVisible} />
            <Right_line_3 $isVisible={isVisible} />
        </Wrap>
    );
};

export default AppServiceLine;