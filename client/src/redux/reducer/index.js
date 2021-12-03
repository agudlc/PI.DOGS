import { ALPHABETIC_ASC_SORT, ALPHABETIC_DES_SORT, GET_BREEDS, GET_BREEDS_FILTER_DB, GET_BREED_SEARCH, GET_TEMPERAMENT_FILTER } from "../actions";
import { GET_TEMPERAMENTS } from "../actions";


const initialState= {
    all: [],
    breeds: [],
    breedSearch: [],
    breedDetail: {},
    temperament: [],
    temperamentSearch: [],
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        
        case GET_BREEDS: 
        return {
            ...state,
            breeds: action.payload,
            all: action.payload,
        };
        case GET_TEMPERAMENTS:
        return {
            ...state,
            temperament: action.payload,
        };
        case GET_BREED_SEARCH:
            return {
                ...state,
                breedSearch: action.payload,
            }
        case ALPHABETIC_ASC_SORT:
            return {
                ...state,
                breeds: state.breeds.sort((a,b) => {
                    if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; };
                    if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; };
                    return 0;
                })
            };
        case ALPHABETIC_DES_SORT:
            return {
                ...state,
                breeds: state.breeds.sort((a,b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) { return -1; };
                    if(a.name.toLowerCase() < b.name.toLowerCase()) { return 1; };
                    return 0;
                })
            }
        case GET_BREEDS_FILTER_DB:
            return {
                ...state,
                breeds: state.breeds.filter((el) => {
                    return el.created
            }),
            }
        case GET_TEMPERAMENT_FILTER:
        return {
                ...state,
                breeds: state.breeds.filter(el => {
                    if (el.temperament) {
                        let temp = el.temperament.includes(action.payload);
                        return temp ? true: false;
                    } else if (el.temperaments) {
                        let temp = el.temperaments.map(el => el.name);
                        let check = temp.includes(action.payload);
                        return check ? true: false;
                    }
                    return false;
                    
                })
            }
        default: return state
    } 
}
