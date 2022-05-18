import { GET_ERRORS, GET_SCHOOLS, SCHOOLS_LOADING } from "../actions/types"
const initialState = {
    schools : [],
    loading : false
}

export default function placeholder (state = initialState, action) {
    switch(action.type) {
        case GET_SCHOOLS : 
            return {
                ...state,
                schools: action.payload
            }
        case SCHOOLS_LOADING :
            return {
                ...state,
                loading : true
            }
        default : 
            return state
    }
}