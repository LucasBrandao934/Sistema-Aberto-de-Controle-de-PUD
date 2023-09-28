import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.headers.post["Content-Type"] = "application/json"    

export const getAuthToken = () => {
    return window.localStorage.getItem("auth_token")
}

export const setAuthToken = (token : string) => {
    window.localStorage.setItem("auth_token", token)
}


export const request = (metodos: string, url: string, data: any) => {
    let headers = {}
    if(getAuthToken() !== null && getAuthToken() !== "null"){
        headers  = {"Authorization" : `Bearer ${getAuthToken()}`}
    }
    return axios({
        method :  metodos,
        headers: headers,
        url : url,
        data : data
    })
}