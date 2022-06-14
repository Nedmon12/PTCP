import { DELETE_SCHOOL_FAIL, DELETE_SCHOOL_REQUEST, DELETE_SCHOOL_SUCCESS, GET_ERRORS, GET_SCHOOLS, SCHOOLS_LOADING } from "./types";
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

export const deleteSchool = (id) => async (dispatch) =>{
    try {
        dispatch({type: DELETE_SCHOOL_REQUEST})
        //TODO backend delete route
        const {data} = await axios.delete(`/admin/school/${id}`)
        dispatch({
            type: DELETE_SCHOOL_SUCCESS,
            payload: data.success
        })
    }
    catch (err) {
        dispatch({
            type: DELETE_SCHOOL_FAIL,
            payload: err.response.data.message
        })
    }
}