import { useState, useEffect } from 'react';

const useAnimateBottom = (scrollY, triggerPosition, initialBottom, targetBottom) => {
    const [bottom, setBottom] = useState(initialBottom);

    useEffect(() => {
        // 스크롤 위치가 특정 트리거 위치에 도달하면 bottom 값을 변경합니다.
        if (scrollY >= triggerPosition) {
            setBottom(targetBottom);
        } else {
            setBottom(initialBottom);
        }
    }, [scrollY, triggerPosition, initialBottom, targetBottom]);

    return bottom;
};

export default useAnimateBottom;
