import { post } from "./requester";


export async function adminCreate(type,formData){
    return await post(`http://localhost:3000/admin/${type}`,formData,false);
}

