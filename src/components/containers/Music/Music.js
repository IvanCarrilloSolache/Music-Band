import React from 'react';
import AudioPlayer from './AudioPlayer'

const Music = () => (
<div>
    <h1 style={{backgroundColor: 'white'}}>MUSIC BY METHOD</h1>
    <div style={{backgroundColor: 'red'}}>
        <div className="feauture-track" style={{backgroundColor: 'green'}}>
            < AudioPlayer />
        </div>
    </div>
</div>
);

export default Music;