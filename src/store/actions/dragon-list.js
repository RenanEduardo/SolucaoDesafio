import * as actionTypes from './actionTypes';
import axios from 'axios'


export const setDragonsList = (list) => {
    return {
        type: actionTypes.GET_DRAGONS_LIST_SUCCESS,
        dragonsList: list
    }
}

export const getDragonsListFail = (error) => {
    return {
        type: actionTypes.GET_DRAGONS_LIST_FAIL,
        error: error
    }
}

export const getDragonsList = () => {
    return dispatch => 
        axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
            .then(res => {
                console.log(res.data)
                dispatch(setDragonsList(res.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(getDragonsListFail(error))
            })
    
}