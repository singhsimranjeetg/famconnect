import React from 'react';

//import { storage} from "../../firebase/firebase.utils"

const Image = (props) => {


    const imgsrc = props.imgsrc

    return (
        <div>
            <h1>Images</h1>
            <img src= {imgsrc} alt = "firebase" />
        </div>
        
    )
}

export default Image;