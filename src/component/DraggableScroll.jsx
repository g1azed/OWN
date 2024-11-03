import styled from "styled-components";
import { useRef } from "react";

const ScrollContainer = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  cursor: grab;
  user-select: none;

  img {
    user-drag: none;
    -webkit-user-drag: none;
  }

  &.scroll-x {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
  }

  &.scroll-y {
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

const DraggableScroll = ({ children, direction = "y" }) => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const scrollPos = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    if (direction === "x") {
      startPos.current = e.pageX - scrollRef.current.offsetLeft;
      scrollPos.current = scrollRef.current.scrollLeft;
    } else {
      startPos.current = e.clientY;
      scrollPos.current = scrollRef.current.scrollTop;
    }
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    let delta;
    if (direction === "x") {
      const x = e.pageX - scrollRef.current.offsetLeft;
      delta = (x - startPos.current) * 2;
      scrollRef.current.scrollLeft = scrollPos.current - delta;
    } else {
      const y = e.clientY;
      delta = y - startPos.current;
      scrollRef.current.scrollTop = scrollPos.current - delta;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.style.cursor = "grab";
  };

  return (
    <ScrollContainer
      ref={scrollRef}
      className={direction === "x" ? "scroll-x" : "scroll-y"}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {children}
    </ScrollContainer>
  );
};

export default DraggableScroll;
