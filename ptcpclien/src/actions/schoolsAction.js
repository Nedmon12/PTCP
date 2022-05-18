import { GET_ERRORS, GET_SCHOOLS, SCHOOLS_LOADING } from "./types";
import axios from 'axios'

export const getSchoolList = () => dispatch => {
    dispatch(setSchoolLoading())
    axios.get('/admin/schools').then(res => dispatch ({
        type: GET_SCHOOLS,
        payload: res.data
    })).catch(err => dispatch ({
        type: GET_ERRORS,
        payload : {}
    }))
}

export const setSchoolLoading = () => {
    return {
        type: SCHOOLS_LOADING
    }
}