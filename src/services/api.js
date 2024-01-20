import Axios from "axios"

export const api = Axios.create({
    baseURL: "https://foodexplorer-api-iqm7.onrender.com"
})