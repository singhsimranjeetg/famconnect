import React from 'react';

//import { storage} from "../../firebase/firebase.utils"

const Image = (props) => {


    const imgsrc = props.imgsrc

    return (
        <div>
            <div>Hello</div>
            <img src= {imgsrc} alt="firebase" className="db__image"/>
        </div>
        
    )
}

export default Image;