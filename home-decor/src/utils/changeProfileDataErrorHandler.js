import numberValidator from "./numberValidator";
import stringValidator from "./stringValidator";

export default function changeProfileDataErrorHandler(value){

    let localStorageItem = localStorage.getItem("userData");

    if(!localStorageItem){
        return [{message: "Something went wrong, please log into your account!"}]
    }

    let localStorageItemData = JSON.parse(localStorageItem);
    let localName = localStorageItemData.name;
    let localTown = localStorageItemData.town;
    let localStreetName = localStorageItemData.streetName;
    let localStreetNumber = localStorageItemData.streetNumber;
    let localTel = localStorageItemData.tel;

    let {name,town,streetName,streetNumber,tel} = value;
    
    name = name.trim();
    town = town.trim();
    streetName = streetName.trim();

    let errors = []


    if(tel.toString().trim() == ""){
        tel = 0;
    }

    if(tel.toString().length == 9){
        tel = `0${tel}`
    }
    // console.log(localName, "name local")
    // console.log(localTown, "town local")
    // console.log(localStreetName, "strName local")
    // console.log(localStreetNumber, "streetNumber local")
    // console.log(localTel, "tel local")

    // console.log(name, "name")
    // console.log(town, "town")
    // console.log(streetName, "strName")
    // console.log(streetNumber, "streetNumber")
    // console.log(tel, "tel")




    // console.log(name == localName, "name detection")
    // console.log(town == localTown, "town detection")
    // console.log(streetName == localStreetName, "strName detection")
    // console.log(streetNumber == localStreetNumber, "streetNumber detection")
    // console.log(tel == localTel, "tel detection")

    if(name == localName && town == localTown && streetName == localStreetName && streetNumber == localStreetNumber && tel == localTel ){
        errors.push({message:"All fields are the same!"})
        return errors;
    }

    if(!name == "" && !stringValidator(name)){
        errors.push({message:"Please provide a valid name!"});
    }

    if(!town == "" && !stringValidator(town)){
        errors.push({message:"Please provide a valid town name!"});
    }

    if(!streetName == "" && !stringValidator(streetName)){
        errors.push({message:"Please provide a valid street name!"});
    }

    if(!streetNumber == "" && !numberValidator(streetNumber)){
        errors.push({message:"Please provide a valid street number!"});
    }

    if(!tel == "" || !tel == 0){
        if(!numberValidator(tel) || tel.toString().length != 10 )
        errors.push({message: "Please provide a valid Bulgarian telephone number!"})
    }

    if(errors.length > 0){
        return errors;
    }

    return [];

}