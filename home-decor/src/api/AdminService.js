import { del, get, post, put } from "./requester";


export async function adminCreateItem(type,formData){
    return await post(`http://localhost:3000/admin/${type}`,formData,false);
}

export async function getAdminItems(category) {
    return await get(`http://localhost:3000/${category}`)
}

export async function deleteItem(category,id) {
    return await del(`http://localhost:3000/admin/${category}/${id}`);
}

export async function adminEditItem(type,formData,id){
    return await put(`http://localhost:3000/admin/${type}/${id}`,formData,false);
}

export async function adminGetSingleItem(category,id) {
    return await get(`http://localhost:3000/${category}/${id}`)
}