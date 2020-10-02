import React, {useEffect} from 'react';

import { storage} from "../../firebase/firebase.utils"

const Image = (props) => {


    const imgUrl = props.imgUrli

    console.log(props)



    return (
        <div>
            <div>Hello</div>
            <img src= {imgUrl} alt="firebase" className="db__image"/>
        </div>
        
    )
}

export default Image;