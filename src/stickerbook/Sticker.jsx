import React from 'react';



const importHtml = () => {
    return {__html: '<iframe src="https://g1azed.github.io/postCard/" style="width:100vw; height:100vw;"></iframe>'};
}
const Sticker = () => {
    return (
        <div dangerouslySetInnerHTML={importHtml()}>
            
        </div>
    );
};

export default Sticker;