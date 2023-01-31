import axios from "axios";

const instance = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers: {"API-KEY": "c382dc01-7099-4d0f-a449-fde940319fac"}
})

export const api = {
    getUsers: (pageId, totalCount)=>{
        return instance.get(`users?page=${pageId}&count=${totalCount}`).then(response=> response.data)},

    unFollow: (userId) =>{
        return instance.delete(`follow/${userId}`).then(responce => responce.data)},
    follow: (userId) =>{
        return instance.post(`follow/${userId}`).then(responce => responce.data)},
    auth: ()=> instance.get('auth/me').then(response =>response.data),
    userProfile: userId=>instance.get(`profile/${userId}`).then(response =>response.data),
}