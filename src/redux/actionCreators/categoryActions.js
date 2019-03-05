import {
    ADD_CATEGORY_FAILURE, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS,
    GET_CATEGORIES_FAILURE, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS,
    DELETE_CATEGORIES_FAILURE, DELETE_CATEGORIES_REQUEST, DELETE_CATEGORIES_SUCCESS
} from '../actionTypes/categoryTypes'
import axios from 'axios';
import { toast } from 'react-toastify';


const token = localStorage.getItem('token');

axios.defaults.headers.common['Authorization'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const addCategoryRequest = () => ({
    type: ADD_CATEGORY_REQUEST,
    isFetching: true
})

export const addCategorySuccess = (payload) => ({
    type: ADD_CATEGORY_SUCCESS,
    isFetching: false,
    payload
})

export const addCategoryFailure = () => ({
    type: ADD_CATEGORY_FAILURE,
    isFetching: false
})

export const getCategoriesRequest = () => ({
    type: GET_CATEGORIES_REQUEST,
    isFetching: true
})

export const getCategoriesSuccess = (payload) => ({
    type: GET_CATEGORIES_SUCCESS,
    isFetching: false,
    payload
})

export const getCategoriesFailure = () => ({
    type: GET_CATEGORIES_FAILURE,
    isFetching: false
})

export const deleteCategoryRequest = () => ({
    type: DELETE_CATEGORIES_REQUEST,
    isFetching: true
})

export const deleteCategorySuccess = (payload) => ({
    type: DELETE_CATEGORIES_SUCCESS,
    isFetching: false,
    payload
})

export const deleteCategoryFailure = () => ({
    type: DELETE_CATEGORIES_FAILURE,
    isFetching: false
})

export const addCategory = (category_details) => dispatch => {
    dispatch(addCategoryRequest())
    axios.post("http://127.0.0.1:5000/api/v2/category", category_details)
        .then(res => {
            if (res.data.status === 200) {
                dispatch(addCategorySuccess(res.data.category_added))
                toast.success(res.data.message)
            }
            else {
                dispatch(addCategoryFailure())
                toast.error(res.data.message)
            }
        })
        .catch(err => {
            toast.error("Error when saving category")
        })
}

export const getCategories = () => dispatch => {
    dispatch(getCategoriesRequest())
    axios.get("http://127.0.0.1:5000/api/v2/category")
        .then(res => {
            if (res.data.status === 200) {
                dispatch(getCategoriesSuccess(res.data.Categories))
                toast.success(res.data.message)
            }
            else {
                dispatch(getCategoriesFailure())
                toast.error(res.data.message)
            }
        })
        .catch(err => {
            dispatch(getCategoriesFailure())
            if (err.response.status === 401) {
                toast.error("Log in again")
            }
            else {
                toast.error("Error getting categories")
            }
        })
}

export const deleteCategory = (category_id) => dispatch => {
    dispatch(deleteCategoryRequest())
    axios.delete("http://127.0.0.1:5000/api/v2/category/" + category_id)
        .then(res => {
            if (res.data.status === 200) {
                dispatch(deleteCategorySuccess(category_id))
                toast.success(res.data.message)
            }
            else {
                dispatch(deleteCategoryFailure())
                toast.error(res.data.message)
            }
        })
        .catch(err => {
            dispatch(getCategoriesFailure())
            toast.error("Error when deleting")
        })
}