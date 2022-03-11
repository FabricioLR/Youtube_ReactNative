import axios from "axios"

//https://yotubecopia.herokuapp.com/
//http://192.168.3.7:3300/
//exp://192.168.3.7:19000

const api = axios.create({
    baseURL: "http://192.168.3.7:3300/"
})

export default api