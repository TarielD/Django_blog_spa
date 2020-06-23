import {
    custom_axios
} from "../axios"


export class PostsApi {
    static async getPosts() {
        const res = await custom_axios.get("/api/posts/");
        console.log(res.data);
        return res.data;
    }
}

export class AuthApi {
    static async registerUser(values) {
        const res = await custom_axios.post("/api/auth/register/", values);
        console.log(res.data);
        return res.data;
    }
}