import React from "react";

import {storage} from "../../firebase/firebase.utils";

import MediaPreview from "../../components/media-preview/media-preview.component"


const MediaPage = () => {



    const fileSelection = async (e) => {
        var file = e.target.files[0]
        var storageRef = storage.ref('images/' + file.name);
        //var task = storageRef.put(file)
        storageRef.put(file)
        console.log("file uploaded")
        console.log(file.type)
    }
    

        
          


    return (
        <div>
            <progress value = "0" max = "100"  className = "uploader">0%</progress>
            <input type="file"  id="fileButton" onChange= {fileSelection}  />  
            
            <MediaPreview />
            
        
    
            

        </div>
        
    )

}


export default MediaPage;


 // `url` is the download URL for 'images/stars.jpg'

  // Or inserted into an <img> element:
 /* var img = document.getElementsByClassName('db__image');
  img.src = url;
  console.log(url)
  console.log(img.src)*/

  
   /*     useEffect(  () => {
            getAllImgs();
        }, [])

       
        

        let storageRef = storage.ref();
        storageRef.child(`images/download.png`).getDownloadURL().then(url => {
            setimgurl(url)
        })

        const getAllImgs = async () => {
            let imageRef = await storageRef.child(`images`).list()       
            let location = imageRef.items.map(item => item.location.path)
            setAllimgurl(location)

                         
        }
    
         task.on('state_changed', (snapshot) => {
          //  var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100
           // uploader.value = percentage;
           // console.log(percentage);
          //  console.log(uploader.value)
            
        },

        (err) => {

        }, 

        () => {

        })
    }

      Allimgurl.map(item => storageRef.child(`${item}`).getDownloadURL().then(url => {    
            //setimgSrc(url)
            
            
           }) )
*/

