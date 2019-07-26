import React from 'react';
import AudioPlayer from './AudioPlayer'

const Music = () => (
<div>
    <h1>MUSIC BY METHOD</h1>
    <div style={{backgroundColor: 'red'}}>
        <div className="feauture-track" style={{backgroundColor: 'green'}}>
            < AudioPlayer />
        </div>
    </div>
</div>
);

export default Music;