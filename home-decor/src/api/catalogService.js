import {get} from "./requester";

export async function getCatalogItems(category) {
    return await get(`http://localhost:3000/${category}`)
}

export async function catalogGetSingleItem(category,id) {
    return await get(`http://localhost:3000/${category}/${id}`)
}