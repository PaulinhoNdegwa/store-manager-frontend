import {
    GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS,
    ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS
} from '../actionTypes/productActiontypes';
import axios from 'axios';
import { toast } from 'react-toastify';


const token = localStorage.getItem('token');

axios.defaults.headers.common['Authorization'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getProductsRequest = () => ({
    type: GET_PRODUCTS_REQUEST,
    isFetching: true
})

export const getProductsSuccess = (payload) => ({
    type: GET_PRODUCTS_SUCCESS,
    isFetching: false,
    payload
})

export const getProductsFailure = () => ({
    type: GET_PRODUCTS_FAILURE,
    isFetching: false
})

export const addProductRequest = () => ({
    type: ADD_PRODUCT_REQUEST,
    isFetching: true
})

export const addProductSuccess = (payload) => ({
    type: ADD_PRODUCT_SUCCESS,
    isFetching: false,
    payload
})

export const addProductsFailure = () => ({
    type: ADD_PRODUCT_FAILURE,
    isFetching: false
})

export const getProducts = () => dispatch => {
    dispatch(getProductsRequest())
    axios.get("http://127.0.0.1:5000/api/v2/products")
        .then(res => {
            console.log(res.data)
            if (res.data.status === 200) {
                dispatch(getProductsSuccess(res.data.Products))
            }
            else {
                dispatch(getProductsFailure())
                toast.error(res.data.message)
            }
        })
        .catch(err => {
            dispatch(getProductsFailure())
            toast.error("Error getting posts!")
        })
}

export const addProduct = (product_data) => dispatch => {
    dispatch(addProductRequest())
    axios.post("http://127.0.0.1:5000/api/v2/products", product_data)
        .then(res => {
            if (res.data.status === 201) {
                dispatch(addProductSuccess(res.data.product_added))
                toast.success(res.data.message)
            }
            else {
                dispatch(addProductsFailure())
                toast.error(res.data.message)
            }
        })
        .catch(err => {
            dispatch(addProductsFailure())
            toast.error("Error saving product")
        })
} 