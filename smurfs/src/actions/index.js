import axios from 'axios';

export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD = 'ADD';
export const DELETE = 'DELETE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH });
  axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.message }))
};

export const addSmurf = newSmurf => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => dispatch({ type: ADD, payload: res.data }))
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE, payload: res.data }))
};