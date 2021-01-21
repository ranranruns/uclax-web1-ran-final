import React, { useState } from 'react';

const SunAndMoon = () => {

    const [imageSrc, imageSrcUpdate] = useState('/assets/img/moon.png');

    const imageOver = () => {
        imageSrcUpdate('/assets/img/sun.png');
    }
    const imageOut = () => {
        imageSrcUpdate('/assets/img/moon.png')
    }

    return (
        <div>The Sun and The Moon
            <img
                alt="The Sun and Moon"
                src={imageSrc}
                onMouseOver={imageOver}
                onMouseOut={imageOut}
            />
        </div>
    )
}

export default SunAndMoon;