import { GET_USER, 
  GET_USER_BY_ID,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER,
 USER_REGISTER_SUCCESS,
 GET_PROFILE,
 GET_PROFILE_SUCCESS,
 GET_PROFILE_FAIL,
 USER_LOGIN_FAIL,


  



} from "../Constant/actionTypes";

const intialState = {
  users: [],
  userById:{},
  
  loading: false,
  errors: null,
  isAuth: false,
};

const reducerUser = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      // return { ...state, users: action.payload };
      return {
        ...state,
        loading: true,
        users:payload,
      };
    case GET_USER_BY_ID:
      // return {...state, userById:action.payload[0]}
return {
  ...state,
  loading:true,
  users:payload,
}
case USER_REGISTER:
  case USER_LOGIN:
  case GET_PROFILE:
    
    return {
      ...state,
      loading: true,
    };
  case USER_REGISTER_SUCCESS:
   
    return {
      ...state,
      loading: false,
      users: payload,
    };
  case USER_REGISTER_FAIL:
  case USER_LOGIN_FAIL:
  case GET_PROFILE_FAIL:

    return {
      ...state,
      loading: false,
      errors: payload,
    };

  case USER_LOGIN_SUCCESS:
    return {
      ...state,
      loading: false,
      isAuth: true,
      token: payload,
      users:payload
    };
  case GET_PROFILE_SUCCESS:
    
    return {
      ...state,
      loading: false,
      users:payload,
      isAuth: true,
      
      
      
    };
    default:
      return state;
  }
};

export default reducerUser
