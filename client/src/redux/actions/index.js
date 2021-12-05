import axios from "axios";

export const GET_BREEDS = "GET_BREEDS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_BREED_DETAIL = "GET_BREED_DETAIL";
export const GET_BREED_SEARCH = "GET_BREED_SEARCH";
export const GET_BREEDS_FILTER_DB = "GET_BREEDS_FILTER_DB";
export const GET_TEMPERAMENT_FILTER = "GET_TEMPERAMENT_FILTER";
export const ALPHABETIC_SORT = "ALPHABETIC_SORT";
export const WEIGHT_SORT = "WEIGHT_SORT";
export const SET_TRUE = "SET_TRUE";
export const SET_FALSE = "SET_FALSE";
export const URL_GET = "http://localhost:3001/api/dogs";
export const URL_GET_TEMPERAMENTS = "http://localhost:3001/api/temperament";

export function getBreeds() {
    return async function (dispatch) {
        let get = await axios.get(URL_GET);
        dispatch({
            type: GET_BREEDS,
            payload: get.data,
        }) 
    }
};

export function getTemperaments() {
    return async function (dispatch) {
        let get = await axios.get(URL_GET_TEMPERAMENTS);
        dispatch({
            type: GET_TEMPERAMENTS,
            payload: get.data,
        })
    }
};

export function getBreedSearch(url) {
    return async function (dispatch) {
        let get = await axios.get("http://localhost:3001/api/dogs?name=" + url);
        dispatch({
            type: GET_BREED_SEARCH,
            payload: get.data,
        })
    }
}


export function alphabeticSort(payload) {
    return {
        type: ALPHABETIC_SORT,
        payload,
    }

}

export function existentBreedFilter() {
    return {
        type: GET_BREEDS_FILTER_DB,
        payload: null,
    }
}

export function temperamentFilter(temperament) {
    return {
        type: GET_TEMPERAMENT_FILTER,
        payload: temperament,
    }
}

export function weightSort(payload){
    return {
        type: WEIGHT_SORT,
        payload,
    }
}

export function breedDetail(id) {
    return async function (dispatch) {
        let get = await axios.get(`http://localhost:3001/api/dogs/${id}`);
        let find = get.data.find(el => el);
        dispatch({
            type: GET_BREED_DETAIL,
            payload: find,
        })
    }
}

export function setTrue() {
    return {
        type: SET_TRUE,
        payload: null
    }
}

export function setFalse() {
    return {
        type: SET_FALSE,
        payload: null
    }
}
