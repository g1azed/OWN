import React, { useState , useRef} from 'react';
import styled from  'styled-components'
import {colors, fontSize}  from '../styles'
import { Sticker_BL1, Sticker_BL2, Sticker_BL3, Sticker_BL4, Sticker_BL5, Sticker_BL6,
    ele_1, ele_2, ele_3, ele_4, ele_5, ele_6, ele_7, ele_8, ele_9, ele_10, ele_11, ele_12, ele_13, ele_14, ele_15, ele_16, ele_17, ele_18,
    Ill_1 , Ill_2 ,Ill_3 ,Ill_4 ,Ill_5 ,Ill_6 ,Ill_7 ,Ill_8 ,Ill_9 ,Ill_10,Ill_11,Ill_12,Ill_13,Ill_14,Ill_15,Ill_16,Ill_17,Ill_18,Ill_B1,Ill_B2,Ill_B3,
    BodyTp_1 ,BodyTp_2, BodyTp_3, BodyTp_4, BodyTp_5, BodyTp_6, BodyTp_7, BodyTp_8, BodyTp_9,
    HeadTp_1, HeadTp_2, HeadTp_3, HeadTp_4, HeadTp_5, HeadTp_6 } 
from './StickerImg'

import Moveable from "react-moveable";

const CategoryText = styled.p`
    font-size: 1.45vw;
    font-weight: 600;
    letter-spacing: -1%;
    color: #fff;
    background-color: ${colors.mainOrange};
    padding: 0.98vw 0 0.98vw 1.88vw;
`
const DefaultImg = styled.img`
    height: 8.07vw;
    border: 0.05vw solid #9e9e9e;
    padding: 0.26vw;
    object-fit: cover;
    cursor: pointer;
`

const BigImg = styled.img`
    height: 15.88vw;
    border: 0.05vw solid #9e9e9e;
    /* padding: 0.78vw; */
    cursor: pointer;
`

const DisplayGrid = styled.div`
    width: 51.56vw;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    img.grid_2fr{
        grid-column: span 2;
    }
`

const StickerBoxWrap = styled.div`
    display: flex;
    margin: 9.21vw 5.67vw 8.69vw 5.67vw;
`

const ObjWrap = styled.div`
    width: 51.56vw;
`

const RecWrap = styled.div`
    position: fixed;
    right: 5.67vw;
    overflow: hidden;
    section{
        background-color: ${colors.mainIvory};
        width: 33.125vw;
        height: 38.54vw;
        overflow: hidden;
    }
    div.btn_wrap{
        margin-top: 1.92vw;
        display: flex;
        gap: 1.45vw;
    }
    div.resizing_box{
        border: 1px solid black;

    }
`

const ResetBtn = styled.button`
    border-radius: 50px;
    background-color: ${colors.mainOrange};
    color: #fff;
    font-size: 1.66vw;
    padding: 0.98vw 5.625vw;
`
const CraftingBtn = styled.button`
    border-radius: 50px;
    border: 0.1vw solid ${colors.mainOrange};
    font-size: 1.66vw;
    padding: 0.98vw 4.47vw;
`

const DraggableImg = styled.img`
    position: absolute;
    cursor: move;
    user-select: none;
    resize: both;
    overflow: auto;

`;


const Sticker = () => {

    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedId, setSelectedId] = useState(null); // 현재 선택된 이미지의 id를 저장

    // 이미지 클릭 시 <RecWrap>의 <section>에 추가
    const handleImageClick = (src) => {
        setSelectedImages((prevImages) => [
            ...prevImages,
            { src, id: Date.now(), top: 'center', left: 'center', x: 0, y: 0, rotate: 0 ,isDragging: false},
        ]);
    };

    // Drag 구현
    const handleMouseDown = (id, clickEvent) => {

        clickEvent.preventDefault();
        setSelectedId(id); // 클릭한 이미지의 id를 선택 상태로 설정
        // 드래그 시작 시의 위치 저장
        const initialX = clickEvent.clientX;
        const initialY = clickEvent.clientY;
        const { x: startX, y: startY } = selectedImages.find((img) => img.id === id);
    
        setSelectedImages((prevImages) =>
            prevImages.map((img) =>
                img.id === id ? { ...img, isDragging: true } : img
            )
        );
            
        const mouseMoveHandler = (moveEvent) => {
            const deltaX = moveEvent.clientX - initialX;
            const deltaY = moveEvent.clientY - initialY;
            
            
            setSelectedImages((prevImages) =>
            prevImages.map((img) =>
                img.id === id
                // 이미지 초기 위치 (startX,Y) + 이동거리 (deltaX,Y)를 현재 이미지 위치에 더함
                ? { ...img, x: startX + deltaX, y: startY + deltaY }
                : img
            )
            );

            console.log("마우스움직이는중")
        };
        
        const mouseUpHandler = () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseup", mouseUpHandler);
            console.log("mouseUpHandler")
        };
        
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler, { once: true });
    };

    const refs = useRef({}); // 각 이미지의 ref 저장
    // 이미지 클릭 시 선택 상태 업데이트
    const handleSelect = (id, e) => {
        e.stopPropagation();
        setSelectedId(id);
    };


    // 빈 공간 클릭 시 선택 해제
    const handleDeselect = (e) => {
        if (e.target === e.currentTarget) {
        setSelectedId(null);
        }
    };

    // section 영역 ref
    const sectionRef = useRef(null);


    return (
        <StickerBoxWrap>
            <ObjWrap>
                <div>
                    <CategoryText> Brand Logo </CategoryText>
                    <DisplayGrid>
                        <DefaultImg onClick={() => handleImageClick(Sticker_BL1)} src= {Sticker_BL1} 

                        />
                        <DefaultImg onClick={() => handleImageClick(Sticker_BL2)} src= {Sticker_BL2} />
                        <DefaultImg onClick={() => handleImageClick(Sticker_BL3)} src= {Sticker_BL3} />
                        <DefaultImg onClick={() => handleImageClick(Sticker_BL4)} src= {Sticker_BL4} />
                        <DefaultImg onClick={() => handleImageClick(Sticker_BL5)} src= {Sticker_BL5} />
                        <DefaultImg onClick={() => handleImageClick(Sticker_BL6)} src= {Sticker_BL6} />
                    </DisplayGrid>
                </div>
                <div>
                    <CategoryText> Brand Illustrator </CategoryText>
                    <DisplayGrid>
                        <DefaultImg onClick={() => handleImageClick(Ill_1)} src={Ill_1} />
                        <DefaultImg onClick={() => handleImageClick(Ill_2)} src={Ill_2} />
                        <DefaultImg onClick={() => handleImageClick(Ill_3)} src={Ill_3} />
                        <DefaultImg onClick={() => handleImageClick(Ill_4)} src={Ill_4} />
                        <DefaultImg onClick={() => handleImageClick(Ill_5)} src={Ill_5} />
                        <DefaultImg onClick={() => handleImageClick(Ill_6)} src={Ill_6} />
                        <DefaultImg onClick={() => handleImageClick(Ill_7)} src={Ill_7} />
                        <DefaultImg onClick={() => handleImageClick(Ill_8)} src={Ill_8} />
                        <DefaultImg onClick={() => handleImageClick(Ill_9)} src={Ill_9} />
                        <DefaultImg onClick={() => handleImageClick(Ill_10)} src={Ill_10} />
                        <DefaultImg onClick={() => handleImageClick(Ill_11)} src={Ill_11} />
                        <DefaultImg onClick={() => handleImageClick(Ill_12)} src={Ill_12} />
                        <DefaultImg onClick={() => handleImageClick(Ill_13)} src={Ill_13} />
                        <DefaultImg onClick={() => handleImageClick(Ill_14)} src={Ill_14} />
                        <DefaultImg onClick={() => handleImageClick(Ill_15)} src={Ill_15} />
                        <DefaultImg onClick={() => handleImageClick(Ill_16)} src={Ill_16} />
                        <DefaultImg onClick={() => handleImageClick(Ill_17)} src={Ill_17} />
                        <DefaultImg onClick={() => handleImageClick(Ill_18)} src={Ill_18} />
                        <BigImg className="grid_2fr"  onClick={() => handleImageClick(Ill_B1)} src={Ill_B1} />
                        <BigImg className="grid_2fr"  onClick={() => handleImageClick(Ill_B2)} src={Ill_B2} />
                        <BigImg className="grid_2fr"  onClick={() => handleImageClick(Ill_B3)} src={Ill_B3} />
                    </DisplayGrid>
                </div>
                <div>
                    <CategoryText> Brand Head Typo </CategoryText>
                    <DisplayGrid>
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(HeadTp_1)} src={HeadTp_1} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(HeadTp_2)} src={HeadTp_2} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(HeadTp_3)} src={HeadTp_3} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(HeadTp_4)} src={HeadTp_4} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(HeadTp_5)} src={HeadTp_5} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(HeadTp_6)} src={HeadTp_6} />
                    </DisplayGrid>
                </div>
                <div>
                    <CategoryText> Brand Body Typo </CategoryText>
                    <DisplayGrid>
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_1)} src={BodyTp_1} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_2)} src={BodyTp_2} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_3)} src={BodyTp_3} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_4)} src={BodyTp_4} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_5)} src={BodyTp_5} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_6)} src={BodyTp_6} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_7)} src={BodyTp_7} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_8)} src={BodyTp_8} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_9)} src={BodyTp_9} />
                    </DisplayGrid>
                </div>
                <div>
                    <CategoryText> Drawing Element </CategoryText>
                    <DisplayGrid>
                        <DefaultImg onClick={() => handleImageClick(ele_1)} src= {ele_1} />
                        <DefaultImg onClick={() => handleImageClick(ele_2)} src= {ele_2} />
                        <DefaultImg onClick={() => handleImageClick(ele_3)} src= {ele_3} />
                        <DefaultImg onClick={() => handleImageClick(ele_4)} src= {ele_4} />
                        <DefaultImg onClick={() => handleImageClick(ele_5)} src= {ele_5} />
                        <DefaultImg onClick={() => handleImageClick(ele_6)} src= {ele_6} />
                        <DefaultImg onClick={() => handleImageClick(ele_7)} src= {ele_7} />
                        <DefaultImg onClick={() => handleImageClick(ele_8)} src= {ele_8} />
                        <DefaultImg onClick={() => handleImageClick(ele_9)} src= {ele_9} />
                        <DefaultImg onClick={() => handleImageClick(ele_10)} src= {ele_10} />
                        <DefaultImg onClick={() => handleImageClick(ele_11)} src= {ele_11} />
                        <DefaultImg onClick={() => handleImageClick(ele_12)} src= {ele_12} />
                        <DefaultImg onClick={() => handleImageClick(ele_13)} src= {ele_13} />
                        <DefaultImg onClick={() => handleImageClick(ele_14)} src= {ele_14} />
                        <DefaultImg onClick={() => handleImageClick(ele_15)} src= {ele_15} />
                        <DefaultImg onClick={() => handleImageClick(ele_16)} src= {ele_16} />
                        <DefaultImg onClick={() => handleImageClick(ele_17)} src= {ele_17} />
                        <DefaultImg onClick={() => handleImageClick(ele_18)} src= {ele_18} />
                    </DisplayGrid>
                </div>
            </ObjWrap>
            <RecWrap>
                <section
                    ref={sectionRef} 
                    onMouseDown={handleDeselect}
                >
                        {selectedImages.map((img) => (
                            <div
                                key={img.id}
                                style={{
                                    position: "absolute",
                                    top: img.y,
                                    left: img.x,
                                    transform: `translate(${img.x}px, ${img.y}px)` 
                                }}
                                onMouseDown={(e) => handleSelect(img.id, e)}
                            >         
                            {/* 개별 Moveable 컴포넌트는 선택된 이미지에만 렌더링 */}
                            {selectedId === img.id && (      
                            <Moveable
                                target={refs.current[img.id]}
                                rotatable={true}
                                resizable={true}
                                keepRatio={false}
                                throttleResize={1}
                                renderDirections={["nw","n","ne","w","e","sw","s","se"]}
                                onResize={e => {
                                    e.target.style.width = `${e.width}px`;
                                    e.target.style.height = `${e.height}px`;
                                    e.target.style.transform = e.drag.transform;
                                }}
                                rotationPosition={"top"}
                                onRotate={e => {
                                    e.target.style.transform = e.drag.transform;
                                }}
                            /> 
                            )}      
                                    <DraggableImg
                                        key={img.id}
                                        src={img.src}
                                        alt="Selected Sticker"
                                        style={{
                                            width: "100px",
                                            height: "100px",

                                        }}
                                        ref={(el) => (refs.current[img.id] = el)} // 각 이미지를 고유 ref로 연결
                                        rotate={img.rotate}
                                        onMouseDown={(e) => handleMouseDown(img.id, e)}
                                        onClick={(e) => e.stopPropagation()} // 이미지 클릭 시 이벤트 전파 중지
                                    />
                                    
                            </div>

                            
                            
                            
                        ))}

                </section>
                <div className="btn_wrap"> 
                    <ResetBtn> Reset </ResetBtn>
                    <CraftingBtn> Crafting </CraftingBtn>
                </div>
            </RecWrap>
        </StickerBoxWrap>
    );
};

export default Sticker;


