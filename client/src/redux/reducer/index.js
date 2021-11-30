import { GET_BREEDS } from "../actions";


const initialState= {
    breeds: [],
    breedDetail: {},
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        
        case GET_BREEDS: 
        return {
            ...state,
            breeds: action.payload,
        };
        default: return state
    }
}