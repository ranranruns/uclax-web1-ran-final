import React, { useState } from 'react';

const Login = () => {

    const [imageSrc, imageSrcUpdate] = useState('/assets/img/moon.png');

    const imageOver = () => {
        imageSrcUpdate('/assets/img/sun.png');
    }
    const imageOut = () => {
        imageSrcUpdate('/assets/img/moon.png')
    }

    return (
        <div>
            <h1>The Sun and The Moon</h1>
            <img
                alt="The Sun and Moon"
                src={imageSrc}
                onMouseOver={imageOver}
                onMouseOut={imageOut}
            />
        </div>
    )
}

export default Login;