import * as actionTypes  from './actionTypes';
import axios  from 'axios';

export const authStart = () => {

  return {

    type: actionTypes.AUTH_START

  }

}

export const authSuccess = token => {

  return {

    type: actionTypes.AUTH_START,
    token: token

  }

}

export const authFail = error => {

  return {

    type: actionTypes.AUTH_FAIL,
    error: error

  }

}

export const authLogin = ( username, password )  =>{

  return dispatch => {

    dispatch.(authStart());
    axios.post(''{
      username: username,
      password: password
    })
    .then( res => {

      const token = res.data.key;
      localStorage.setItem('token', token);
      dispatch( authSuccess( token ) );

    } )

  }

}
