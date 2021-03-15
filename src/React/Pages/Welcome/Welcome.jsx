import React from 'react';

/* Components ---------------------------*/
import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';

const Welcome = () => {
    return (
        <div>
            {/* <h1>Welcome</h1> */}
            <div className="nested">
                <Slideshow />
            </div>
            <div className="nested">
                <Tabbed />
            </div>
            <div className="nested">
                <Staff />
            </div>
        </div>
    )
}

export default Welcome;