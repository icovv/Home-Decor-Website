export default function useHandleImageChange(setImgFile,setImg){
    let handleImageChange = (e) => {
        //add validation for image type (extension - jpg/png etc )
        let file = e.target.files[0];
        if(file){
            setImgFile(file);
            let reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
        }

    }

    return {
        handleImageChange
    }
}