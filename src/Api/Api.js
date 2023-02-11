import axios from "axios";

const instance = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers: {"API-KEY": "1fc9a3d6-9adb-4dd0-bdd0-f1e9d3f54622"}
})

export const api = {
    getUsers: (pageId, totalCount)=>{
        return instance.get(`users?page=${pageId}&count=${totalCount}`).then(response=> response.data)},

    unFollow: (userId) =>{
        return instance.delete(`follow/${userId}`).then(responce => responce.data)},
    follow: (userId) =>{
        return instance.post(`follow/${userId}`).then(responce => responce.data)},
    auth: ()=> instance.get('auth/me').then(response =>response.data),
    userProfile: userId=>profileApi.getProfile(userId),
}
export const profileApi = {
    getProfile : (userId)=> instance.get('profile/'+userId).then(response =>response.data),
    getProfileStatus : (userId)=> instance.get(`profile/status/${userId}`).then(response =>response),
    setProfileStatus : (status)=> instance.put('/profile/status',{status: status}),

}
