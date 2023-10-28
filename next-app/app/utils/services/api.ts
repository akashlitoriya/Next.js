import { apiConnector }  from "../apiConnector";
import { authAPI } from "../apis";
import { postAPI } from "../apis";
import {toast} from 'react-hot-toast'

export const login = async(data: any) => {
    const toastLoading = toast.loading('Logging in...')
    let result = null;
    try{
        const response = await apiConnector("POST", authAPI.login, data, null, null);
        if(!response.data.success){
            throw new Error(response.data.message)
        }

        toast.success('Logged in successfully')
        result = response.data.data;
    }catch(error){
        toast.error('Error logging in')
        console.log("Error Login: ", error)
    }
    toast.dismiss(toastLoading);
    return result;
}

export const signup = async(data: any) => {
    const toastId = toast.loading('Signing up...')
    let result = null;
    try{
        const res = await apiConnector("POST", authAPI.signup, data, null, null);
        if(!res.data.success){
            throw new Error(res.data.message)
        }

        toast.success('Signed up successfully')
        result = res.data.data;
    }catch(error){
        toast.error('Error signing up')
        console.log("Error signup: ", error)
    }
    toast.dismiss(toastId);
    return result;
}

export const getPosts = async(data : any, token: any) => {
    const toastId = toast.loading('Fetching posts...');
    let result = null;
    try{
        const res = await apiConnector("GET", postAPI.getAllPosts, data, {Authorization: `Bearer ${token}`}, null);
        if(!res.data.success){
            throw new Error(res.data.message);

        }
        toast.success('Fetched posts successfully')
        result = res.data.data;
    }catch(error){
        toast.error('Error fetching posts')
        console.log("Error fetching posts: ", error)
    }
    toast.dismiss(toastId);
    return result;
}