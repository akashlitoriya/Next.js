export const base_url = "https://blog-backend-6g8e.onrender.com"

export const authAPI = {
    login: `${base_url}/api/auth/login`,
    signup: `${base_url}/api/auth/signup`
}

export const postAPI = {
    createPost: `${base_url}/api/post/createPost`,
    getAllPosts: `${base_url}/api/post/getAllPosts`,
    deletePost: `${base_url}/api/post/deletePost`,
    createComment: `${base_url}/api/post/createComment`,
}

export const homeAPI = {
    getFeed: `${base_url}/api/post/getFeed`
}