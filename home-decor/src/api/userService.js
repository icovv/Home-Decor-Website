import {put,post,get} from '../api/requester.js'


export async function login(email,password) {
    return await post("http://localhost:3000/login",{email,password});
}

export async function register(email,password) {
    return await post("http://localhost:3000/register",{email,password});
}

export async function logout() {
    return await get("http://localhost:3000/logout");
}

export async function changeProfileData(id,name,town,streetName,streetNumber,tel) {
    return await put(`http://localhost:3000/profile/${id}`,{name,town,streetName,streetNumber,tel});
}

export async function getProfileData(id){
    return await get(`http://localhost:3000/profile/${id}`)
}