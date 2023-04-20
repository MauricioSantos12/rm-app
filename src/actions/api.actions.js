import axios from "axios";

export function getDataCharacters(pagination) {
    let response;
    try {
       response = axios.get(`https://rickandmortyapi.com/api/character/?page=${pagination}`);
       return response;
    } catch (error) {
        return error
    }
}