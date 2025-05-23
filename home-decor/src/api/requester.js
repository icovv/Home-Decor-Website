export async function requester(method,url,data,contentType){
    let options ={
        method,
        headers: {}
    }
    if (data){
        if(contentType){
        options.headers["Content-Type"] = `application/json`;
        options.body = JSON.stringify(data);
        } else{
        options.body = data;
        }
    }

    let user = JSON.parse(localStorage.getItem('userData'))
    
    if (user){
        options.headers["X-Authorization"] = user.accessToken;
    }
    
    try {
        let response = await fetch(url,options);
        if (!response.ok){
            if (response.status == 403){
                localStorage.removeItem('userData');
            }
            let err = await response.json();
            return err
        }
        if (response.status == 204){
            return response
        } else {
            return response.json();
        }
    } catch (error) {
        return error
    }
}

export async function get(url){
    return await requester(`Get`,url);
}
export async function post(url,data,contentType){
    return await requester(`POST`,url,data,contentType);
}
export async function put(url,data,contentType){
    return await requester(`PUT`,url,data,contentType);
}
export async function del(url){
    return await requester(`Delete`,url);
}