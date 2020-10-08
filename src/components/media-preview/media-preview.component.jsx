import React from "react"

import {storage} from "../../firebase/firebase.utils";

import Image from "../media-image/media-image.component"

class MediaPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        mediaPath : [],
        tempUrl: "",
        mediaSrc : []
    };
    
  }

            componentDidMount =  () => {              
                 this.getAllImgPath();
                }

  

  

  getImages = () => {
         let storageRef = storage.ref();
         storageRef.child(`images/download.png`).getDownloadURL().then(url => {
            this.setState({tempUrl : url})

        
        })
  }

  getAllImgPath = async () => {

            var temp1 = [];
            let storageRef = storage.ref();
            let imageRef = await storageRef.child(`images`).list()       
            let location = imageRef.items.map(item => item.location.path)
            this.setState({mediaPath : location})  
            console.log(this.state.mediaPath)
            
            this.state.mediaPath.map(item => storageRef.child(`${item}`).getDownloadURL().then(url => {
                temp1.push(url)
                this.setState({mediaSrc : temp1})
                console.log(this.state.mediaSrc) 

            }))

            
                     
  }


  render() {
    return (
      <div> 
           {
               console.log("i am fired")
           }
           {
               this.state.mediaSrc.map((imgSrc,index) => { 
                   console.log("from inside")
                      return (
                          <Image key = {index} imgsrc = {imgSrc} /> 
                      )
                      
                      }
                      
                      
               )}      
      </div>
    );
  }
}


export default MediaPreview;