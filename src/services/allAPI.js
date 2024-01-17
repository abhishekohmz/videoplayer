import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"



export const uplaodVideo = async (reqBody) =>{
    // call POSt http request ti "http://localhost:4000/videos" to add video to json server and return response 
    
    return await commonApi("POST",`${serverUrl}/videos`,reqBody)
}

// get all videos from json server 

export const getAllvideos= async()=>{

    // make get http request to "http://localhost:4000/videos" to get all video from json server to view component

    return await commonApi("GET",`${serverUrl}/videos`,"")
}


// get a video from json server

export const getAvideo = async(id)=>{

    return await commonApi("GET",`${serverUrl}/videos/${id}`,"")
}

//remove video from json server 
export const deleteVideo = async (id)=>{
    return await commonApi("DELETE",`${serverUrl}/videos/${id}`,{})
}

// store watch history in json server

export const addToHistory = async(videoDetails)=>{

    // make POST http request to "http://localhost:4000/history" to add watchhistory to the json server and return response to viedocard 

    return await commonApi("POST",`${serverUrl}/history`,videoDetails)

}

// get all watching video history
export const getallHistory = async()=>{
    return await commonApi("GET",`${serverUrl}/history`,"")
}

// delete watching video history
export const deleteHistory=async(id)=>{
    return await commonApi("DELETE",`${serverUrl}/history/${id}`,{})
}

// add a category to json server

export const addCategory=async (reqBody)=>{

    // male post http method request to "http://localhost:4000/category" to add viideo to json server return respose category component
    return await commonApi("POST",`${serverUrl}/category`,reqBody)

}

// get all category to json server

export const getAllCategory=async ()=>{

    return await commonApi("GET",`${serverUrl}/category`,"")
}

// delete category from json server

export const deleteCategory=async(id)=>{
    return await commonApi("DELETE",`${serverUrl}/category/${id}`,{})
}

// update particular category to json server
export const updateCategory = async (id,body)=>{
    return await commonApi("PUT",`${serverUrl}/category/${id}`,body)
}