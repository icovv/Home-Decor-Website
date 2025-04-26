import { get, post } from "./requester";


export async function adminCreateItem(type,formData){
    return await post(`http://localhost:3000/admin/${type}`,formData,false);
}

export async function getAdminItems(category) {
    return await get(`http://localhost:3000/${category}`)
}
