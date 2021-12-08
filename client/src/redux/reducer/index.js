import { ALPHABETIC_SORT, GET_BREEDS, GET_BREEDS_FILTER_DB, GET_BREED_DETAIL, GET_BREED_SEARCH, GET_TEMPERAMENT_FILTER, SET_FALSE, SET_TRUE, VACIATE, WEIGHT_SORT } from "../actions";
import { GET_TEMPERAMENTS } from "../actions";


const initialState= {
    all: [],
    breeds: [],
    breedSearch: [],
    breedDetail: [],
    setFalse: false,
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
        case ALPHABETIC_SORT:
            let alphabeticSort = action.payload === "A" ? state.breeds.sort((a,b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; };
                if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; };
                return 0;
            }) : state.breeds.sort((a,b) => {
                            if(a.name.toLowerCase() > b.name.toLowerCase()) { return -1; };
                            if(a.name.toLowerCase() < b.name.toLowerCase()) { return 1; };
                            return 0;
                        })
            return {
                ...state,
                breeds: alphabeticSort,
            };
        case GET_BREEDS_FILTER_DB:
            let all = state.all;
            let filter = all.filter((el) => {
                return el.created
            });
            return {
                ...state,
                breeds: filter,
            }
        case GET_TEMPERAMENT_FILTER:
            let allTemp = state.all
            let filterTemp = allTemp.filter(el => {
                if (el.temperament) {
                    let temp = el.temperament.includes(action.payload);
                    return temp ? true: false;
                } else if (el.temperaments) {
                    let temp = el.temperaments.map(el => el.name);
                    let check = temp.includes(action.payload);
                    return check ? true: false;
                }
                return false;
                
            });
            return {
                ...state,
                breeds: filterTemp,
            }
            case WEIGHT_SORT:  
            let weightSort= action.payload === "A" ? state.breeds.sort((a,b) => {
                    if(!isFinite(a.weightMin) && !isFinite(b.weightMin)) {
                        return 0;
                    }
                    if(!isFinite(a.weightMin)) {
                        return 1;
                    }
                    if(!isFinite(b.weightMin)) {
                        return -1;
                    }
                    return a.weightMin-b.weightMin;
                
                }) : state.breeds.sort((a,b) => {
                    if(!isFinite(a.weightMin) && !isFinite(b.weightMin)) {
                        return 0;
                    }
                    if(!isFinite(a.weightMin)) {
                        return 1;
                    }
                    if(!isFinite(b.weightMin)) {
                        return -1;
                    }
                    return a.weightMin-b.weightMin;
                }).reverse();
            
            
                return {
                ...state,
                breeds: weightSort,
            };
            case GET_BREED_DETAIL:
                return {
                    ...state,
                    breedDetail: action.payload,
                }
            case SET_TRUE:
                return {
                    ...state,
                    setFalse: true,
                }
            case SET_FALSE:
                    return {
                        ...state,
                        setFalse: false,
                    }
            case VACIATE:
                return {
                    ...state,
                    breedDetail: [],
                }
        default: return state
    } 
}

