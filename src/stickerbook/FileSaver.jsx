import React, { useRef } from "react";
import html2canvas from "html2canvas";

const FileSaver = () => {
    const captureRef = useRef();

    const handleSaveAsPng = async () => {
        if (captureRef.current) {
            try {
                const canvas = await html2canvas(captureRef.current);
                const dataURL = canvas.toDataURL("image/png");

                // 다운로드 링크 생성
                const link = document.createElement("a");
                link.href = dataURL;
                link.download = "capture.png";
                link.click();
            } catch (error) {
                console.error("Error capturing the element:", error);
            }
        }
    };

    return (
        <>
            <div
                ref={captureRef}
            >
                <h2>캡처할 영역</h2>
                <p>이 영역이 PNG로 저장됩니다.</p>
            </div>
            <button onClick={handleSaveAsPng} style={{ padding: "10px 20px" }}>
                PNG로 저장
            </button>
        </>
    );
};

export default FileSaver;
