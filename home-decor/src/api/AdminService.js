import { del, get, post } from "./requester";


export async function adminCreateItem(type,formData){
    return await post(`http://localhost:3000/admin/${type}`,formData,false);
}

export async function getAdminItems(category) {
    return await get(`http://localhost:3000/${category}`)
}

export async function deleteItem(category,id) {
    return await del(`http://localhost:3000/admin/${category}/${id}`);
}
