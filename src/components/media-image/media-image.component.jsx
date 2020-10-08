import React from 'react';
import "./media-image.styles.scss"

//import { storage} from "../../firebase/firebase.utils"

const Image = (props) => {


    const imgsrc = props.imgsrc

    return (
        <div>
           
            <img src= {imgsrc} alt = "firebase" className = "media-img" />
        </div>
        
    )
}

export default Image;