import axios from "axios";

import {GET_USER, GET_USER_BY_ID,
  USER_LOGIN,USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,




} from "../Constant/actionTypes"


export const getUsers=()=>async (dispatch)=>{

try {
    
  const res = await axios.get('/api/user')
  console.log(res)

  dispatch({type : GET_USER , payload : res.data})


} catch (error) {

  console.log('get error' , error)
  
}


axios.get("/api/user")
.then((res)=>dispatch({type:GET_USER,payload:res.data}))
.catch((err)=>console.log(err))

}
//register

export const userRegister=(newUser)=>async(dispatch)=>{
dispatch({type : USER_REGISTER});

try {
const userAdd=await axios.post("api/user/register",newUser);
console.log(userAdd);
dispatch({type :USER_REGISTER_SUCCESS,payload:userAdd.data});


}catch(error){
  dispatch({type:USER_REGISTER_FAIL,payload:error.response.data})


}
}

//user login

export const userLogin=(loginCred)=>async(dispatch)=>{
dispatch({type:USER_LOGIN});

try {
const userLogin = await axios.post("api/user/login",loginCred);
console.log(userLogin)
localStorage.setItem("token",userLogin.data.token);
dispatch({type:USER_LOGIN_SUCCESS,payload:userLogin.data.token})

  
} catch (error) {
  console.log(error)
  dispatch({type:USER_LOGIN_FAIL, payload:error.response.data})
}

}


export const getProfile=()=>async(dispatch)=>{
  
dispatch({ type:GET_PROFILE })


try {
  const token = localStorage.getItem("token");

const config ={

  header:{
    Autorization :token,
  }
}

const user = await axios.get("/user/current", config)

    dispatch({ type: GET_PROFILE_SUCCESS, payload: user.data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data });
  }
};




// export const getProfile=()=>async(dispatch)=>{
//   const config ={

//       header:{
//         Autorization :localStorage.getItem("token"),
//       }
//     }
//     dispatch({type:GET_PROFILE})
//     try{

//  const userProfile=await axios.get('/user/current',config)
//  dispatch({type:GET_PROFILE_SUCCESS,payload:userProfile.data})


//     }catch(error){

//       dispatch({type:GET_PROFILE_FAIL,payload:error.response.data})
//     }
// }






export const getUserById=(id)=>(dispatch)=>{

axios.get(`/api/user${id}`)
.then((res)=>dispatch({type:GET_USER_BY_ID,payload:res.data}))
.catch((err)=>console.log(err))

}
// export const addUser = (newUser) => (dispatch) => {
//     axios
//       .post("/api/user", newUser)
//       .then(() => dispatch(getUsers()))
//       .catch((err) => console.log(err));
//   };
  
  export const deleteUser = (id) => (dispatch) => {
    axios
      .delete(`/api/user/${id}`)
      .then(() => dispatch(getUsers()))
      .catch((err) => console.log(err));
  };
  
  export const editUserById = (id, editUser) => (dispatch) => {
    axios
      .put(`/api/user/${id}`, editUser)
      .then(() => dispatch(getUsers()))
      .catch((err) => console.log(err));
  };

