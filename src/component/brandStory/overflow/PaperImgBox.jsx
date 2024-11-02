import useMovePosition from "../../../hook/useMovePosition";
import PaperImgBoxBase from "./PaperImgBoxBase";
import paper1 from "../../../assets/brandStory/paper1.png";

const PaperImgBox = ({
  $type,
  $top,
  $left,
  $hoverX,
  $hoverY,
  $reverse,
  alt = "종이뭉치",
}) => {
  const { position, duration, onMouseEnter } = useMovePosition({
    $top,
    $left,
    $hoverX,
    $hoverY,
  });

  return (
    <PaperImgBoxBase
      src={$type}
      alt={alt}
      $top={position.top}
      $left={position.left}
      width={$type === paper1 ? 324 : 301}
      height={$type === paper1 ? 324 : 301}
      $reverse={$reverse}
      $duration={duration}
      onMouseEnter={onMouseEnter}
    />
  );
};

export default PaperImgBox;
