import { GET_ERRORS, GET_SCHOOLS, SCHOOLS_LOADING,
    DELETE_SCHOOL_FAIL, DELETE_SCHOOL_RESET,DELETE_SCHOOL_REQUEST, DELETE_SCHOOL_SUCCESS } from "../actions/types"
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

export const deleteSchool = (state = {}, action) => {
    switch(action.type) {
        case  DELETE_SCHOOL_REQUEST :
            return {
                ...state,
                loading : true
            }
        case DELETE_SCHOOL_SUCCESS :
            return {
                ...state,
                loading : false,
                isDeleted: action.payload
            }
        case DELETE_SCHOOL_FAIL :
            return {
                ...state,
                isDeleted: action.payload
            }
        case DELETE_SCHOOL_RESET :
            return {
                ...state,
                isDeleted : false
            }
        default:
            return state
    }
}