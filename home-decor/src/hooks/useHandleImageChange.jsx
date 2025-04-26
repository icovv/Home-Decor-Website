import { useState } from "react";

export default function useHandleImageChange(setImgFile,setImg){
    let [error,setErr] = useState([]);

    let handleImageChange = (e) => {
        //add validation for image type (extension - jpg/png etc )
        let file = e.target.files[0];
        if(file){
            let fileTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
            if(!fileTypes.includes(file.type)){
                setErr([{message: "The image supports only jpeg, png, gif and jpg file types!"}])
                return;
            }
            setImgFile(file);
            let reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
        }

    }

    let killDiv = () => {
        setErr([]);
    }

    return {
        error,
        killDiv,
        handleImageChange
    }
}