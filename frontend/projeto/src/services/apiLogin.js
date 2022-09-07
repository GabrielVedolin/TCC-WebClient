import axios from "axios";

export const apiLogin = axios.create({
    baseURL:"http://localhost:3000",
})


export const createSession = async (email, password) => {
    return apiLogin.post("/login", {email, password});
}