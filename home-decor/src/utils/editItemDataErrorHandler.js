import numberValidator from "./numberValidator";

export default function editItemDataErrorHandler(value,image){
    let errors = [];

    let fileTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
    let categories = {"Bedroom":"bedroom", "Decor":"decor", "Dining-Room":"dining-room"};
    console.log(value.price)

    if(value.cat.trim() == "" || value.title.trim() == "" || value.price == "" || !numberValidator(value.price)){
        errors.push({message:"Please make sure you provide a valid image, category, title and price!"})
        return errors;
    }

    if(image && !fileTypes.includes(image.type)){
        errors.push({message:"The image supports only jpeg, png, gif and jpg file types!"})
    }

    if(!categories[value.cat]){
        errors.push({message:"Please select a valid category!"})
    }

    if(errors.length > 0){
        return errors;
    }

    return [];
}