import axios from "axios";

export const GET_BREEDS = "GET_BREEDS";
export const GET_BREEDS_FILTER_TEMP = "GET_BREEDS_FILTER_TEMP";
export const GET_BREEDS_FILTER_DB = "GET_BREEDS_FILTER_DB";
export const ALPHABETIC_SORT = "ALPHABETIC_SORT";
export const WEIGHT_SORT = "WEIGHT_SORT";
export const SEARCH_BREED = "SEARCH_BREED";
export const GET_BREED_DETAIL = "GET_BREED_DETAIL";
export const BREED_CREATE = "BREED_CREATE";
export const URL_GET = "http://localhost:3001/api/dogs";

export function getBreeds() {
    return async function (dispatch) {
        let get = await axios.get(URL_GET);
        dispatch({
            type: GET_BREEDS,
            payload: get.data,
        }) 
    }
}



