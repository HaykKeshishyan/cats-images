import {useState} from "react";

import "./styles.css";

const LoadableImg = ({src, alt}) => {
    const [isLoaded, setIsLoaded] = useState(false);


    return (
        <div className={isLoaded ? 'l_container_loaded' : 'l_container'}>
            <img className={isLoaded ? "l_image_loaded" : 'l_image'}
                 src={src}
                 alt={alt}
                 onLoad={() => setIsLoaded(true)}
            />

        </div>
    );
};

export default LoadableImg;
