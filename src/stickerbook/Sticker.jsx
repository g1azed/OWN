import React from 'react';



const importHtml = () => {
    return {__html: '<iframe src="https://g1azed.github.io/postCard/" style="width:99vw; height:100vh;" frameborder="0"></iframe>'};
}
const Sticker = () => {
    return (
        <div dangerouslySetInnerHTML={importHtml()}>
            
        </div>
    );
};

export default Sticker;