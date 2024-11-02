import React from 'react';
import AnalogImg from '../assets/analog/analog_final.png'
import styled from 'styled-components'

const AnalogWrap = styled.div`
    width: 100vw;
    img{
        width: 100vw;
    }
`

const Analog = () => {
    return (
        <AnalogWrap>
            <img src={AnalogImg} />
        </AnalogWrap>
    );
};

export default Analog;