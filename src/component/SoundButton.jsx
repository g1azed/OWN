import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import music from "../assets/own_music.mp3";
import vwCalc from "../util/vwCalc";
import { colors } from "../styles";

const MAIN_ORANGE = colors.mainOrange;

const SoundBtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

const SoundBtn = styled.button`
  width: ${vwCalc(55)};
  height: ${vwCalc(55)};
  border-radius: 50%;
  border: none;
  background-color: ${MAIN_ORANGE};
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SoundWave = styled.div`
  width: 2.887vw;
  height: 2.887vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const quiet = keyframes`
    25% {
        transform: scaleY(1.2);
    }
    50% {
        transform: scaleY(0.8);
    }
    75% {
        transform: scaleY(1.6);
    }
`;

const normal = keyframes`
    25% {
        transform: scaleY(2);
    }
    50% {
        transform: scaleY(0.8);
    }
    75% {
        transform: scaleY(0.8);
    }
`;

const loud = keyframes`
    25% {
        transform: scaleY(2);
    }
    50% {
        transform: scaleY(0.8);
    }
    75% {
        transform: scaleY(2.4);
    }
`;

const SoundWaveItem = styled.i`
  display: block;
  width: 0.104vw;
  margin-right: 0.4vw;
  height: 0.5vw;
  background: white;
  animation: ${({ $isAnimating }) =>
    $isAnimating ? "none" : "none"}; /* 기본 애니메이션 */

  ${({ $isAnimating, $index }) =>
    $isAnimating &&
    css`
      animation: ${$index % 2 === 0 ? quiet : $index % 3 === 0 ? loud : normal}
        1.2s ease-in-out infinite;
    `}
`;

const SoundButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(music));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.log("Playback failed: ", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // 오디오 시간을 처음으로 리셋
    };
  }, []);

  return (
    <SoundBtnWrap>
      <SoundBtn onClick={togglePlay}>
        <audio src={music} />
        <SoundWave>
          {[...Array(7)].map((_, index) => (
            <SoundWaveItem
              key={index}
              $isAnimating={isPlaying}
              $index={index}
            />
          ))}
        </SoundWave>
      </SoundBtn>
    </SoundBtnWrap>
  );
};

export default SoundButton;
