import axios from 'axios'
import {replace} from 'react-router-redux'

import User from '../../models/User'

function loginAction(dispatch, username, password){
  axios.post('/login', {
    username, password
  })
  .then(function({data: user}){
    dispatch({type: 'USER', user: new User(user)})
    dispatch(replace('/map'))
  })
  .catch(function(error){
    console.log(error)
  })
}

export default loginAction
