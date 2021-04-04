import { useEffect, useState } from 'react';

import './style.scss'

const Slide = ({images}) => {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const tick = setInterval(() => {
            if (images.length -1 > activeImage) {
                setActiveImage(activeImage +1);
            } else {
                setActiveImage(0);
            }
        },[4000])

        return () => clearInterval(tick)
    }, [activeImage, images.length]);

    return ( 
        <div className="slide-container">
            {images.map((image,index) => (
                <img 
                    key={index}
                    src={image.src} 
                    alt="memorie-img"
                    className={
                        activeImage === index
                        ? "slide-container-image slide-container-image-show"
                        : "slide-container-image slide-container-image-hide"
                    }
                />
            ))}
        </div>
     );
}
 
export default Slide;