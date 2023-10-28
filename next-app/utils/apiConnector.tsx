import axios from "axios";

export const axiosInstance = axios.create({});
export const apiConnector = (method:any, url:any, data:any, headers:any, params:any) => {
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: data? data:null,
        headers: headers? headers:null,
        params: params? params: null
    })
}