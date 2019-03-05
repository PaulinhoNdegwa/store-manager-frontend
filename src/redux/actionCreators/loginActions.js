import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes/loginActiontypes';
import axios from 'axios';
import { toast } from 'react-toastify';

export const loginRequest = () => ({
    type: LOGIN_REQUEST
})

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
})

export const loginFailure = () => ({
    type: LOGIN_FAILURE
})

export const login = (login_details) => dispatch => {
    dispatch(loginRequest())
    axios.post("http://127.0.0.1:5000/api/v2/auth/login", login_details)
        .then(res => {
            if (res.data.status === 200) {
                dispatch(loginSuccess())
                toast.success("Successful, Welcome")
                localStorage.setItem("token", "Bearer " + res.data.token)
            }
            else {
                dispatch(loginFailure())
                toast.error(res.data.message)
            }
        })
        .catch(err => {
            dispatch(loginFailure())
            toast.error("Error when logging in")
        })
}