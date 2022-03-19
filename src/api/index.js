import axios from 'axios'
const API_URL = 'https://zeonbit-server.herokuapp.com/api'

export const fetchApi = {
    portRequest: (endpoints , body) => {
        return axios.post(`${API_URL}${endpoints}` , body)
    }
}