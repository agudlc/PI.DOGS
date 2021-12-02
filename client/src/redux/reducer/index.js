import { ALPHABETIC_ASC_SORT, ALPHABETIC_DES_SORT, GET_BREEDS } from "../actions";
import { GET_TEMPERAMENTS } from "../actions";


const initialState= {
    all: [],
    breeds: [],
    breedDetail: {},
    temperament: [],
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
        default: return state
    }
}