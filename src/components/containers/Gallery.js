import React from 'react';
import { Gallery, GallryImage, GalleryImage } from 'react-gesture-gallery';
import { images } from "./images";

const GalleryComp = props => {
    const [index, setIndex] = React.useState(0)
    return ( 
        <Gallery index={0}>
            {images.map(image => (<GalleryImage src={image} />))}
        </Gallery>
    )
}


export default GalleryComp;