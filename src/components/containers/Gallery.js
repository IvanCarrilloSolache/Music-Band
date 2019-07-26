import React from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { images } from "./images";
import "./Gallery.css";

const GalleryComp = props => {
    const [index, setIndex] = React.useState(0)
    return ( 
        <div>
            <h1>GALLERY</h1>
            <div  className="carousel">
                <Gallery
                    index={index} 
                    onRequestChange={i => { 
                        setIndex(i)
                    }}
                >
                    {images.map(image => (
                        <GalleryImage className="image-oriented" src={image} />
                    ))}
                </Gallery>
            </div>
        </div>
    )
}

export default GalleryComp;