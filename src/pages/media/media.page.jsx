import React from "react";

import {storage} from "../../firebase/firebase.utils";

import Image from "../../components/image/image.component"


const MediaPage = () => {

    var uploader = document.getElementsByClassName("uploader");
    var fileButton = document.getElementById("#fileButton")

    const fileSelection = async (e) => {
        console.log("dgdgdg")
        var file = e.target.files[0]

        var storageRef = storage.ref('images/' + file.name);

        var task = storageRef.put(file)

         task.on('state_changed', (snapshot) => {
            var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100
           // uploader.value = percentage;
           // console.log(percentage);
          //  console.log(uploader.value)
            
        },

        (err) => {

        }, 

        () => {

        }
        
        )
    }

        var storageRef = storage.ref()
        
        var imgUrl = storageRef.child('images/download.png').getDownloadURL().then(url => {return url})

        console.log(imgUrl.PromiseResult)

   


    


    return (
        <div>
            <progress value = "0" max = "100"  className = "uploader">0%</progress>
            <input type="file"  id="fileButton" onChange= {fileSelection}  />
            <Image imgUrli = {imgUrl} />

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