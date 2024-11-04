import React from 'react';
import AnalogImg1 from '../assets/analog/analog_f.png'
import AnalogImg2 from '../assets/analog/analog_f2.png'
import styled from 'styled-components'

const AnalogWrap = styled.div`
    width: 100vw;
    img{
        width: 100vw;
        padding-bottom: 18.9vw;
    }
`

const Analog = () => {
    return (
        <AnalogWrap>
            <img src={AnalogImg1} />
            <img src={AnalogImg2} />
        </AnalogWrap>
    );
};

export default Analog;