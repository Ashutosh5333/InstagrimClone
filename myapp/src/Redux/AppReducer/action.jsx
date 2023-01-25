import * as types from "./actionTypes"
import axios from "axios"



const getdataReq = () =>{
    return {
       type: types.GET_DATA_REQUEST
    }
} 
const getdataSucess = (payload) => {
    return {
       type :types.GET_DATA_SUCCESS,
       payload,
    }
}
const getdataFail = () => {
   return {
       type :types.GET_DATA_FAILURE
   }
}
// -------- ADD DATA---------- 

const AdddataReq = () =>{
   return {
      type: types.ADD_DATA_REQUEST,
   }
} 
const AdddataSucess = (payload) => {
   return {
      type :types.ADD_DATA_SUCCESS,
      payload,
   }
}
const AdddataFail = () => {
  return { 
      type :types.ADD_DATA_FAILURE
  }
}

// ======================= User data =======================  //
const getuserdataReq = () =>{
   return {
      type: types.USER_DATA_REQUEST
   }
} 
const getuserdataSucess = (payload) => {
   return {
      type :types.USER_DATA_SUCCESS,
      payload,
   }
}
const getuserdataFail = () => {
  return {
      type :types.USER_DATA_FAILURE
  }
}

// ============    Get User Data   =================  //


export const GetUserData = (dispatch) => {
      dispatch(getuserdataReq)
      return axios.get(`https://sore-cyan-llama-robe.cyclic.app/signupdata`)
      .then((res)=>{
      return   dispatch(getuserdataSucess(res.data))
      })
      .catch((e)=>{  
      return    dispatch(getuserdataFail())
      })
}



const  ADDProducts =(newdata) => (dispatch) => {
  dispatch(AdddataReq)
  return axios.post(`https://sore-cyan-llama-robe.cyclic.app/create`,newdata)
   .then((res) => {
    return   dispatch(AdddataSucess(res.data));
   }).catch((e)=> {
   return    dispatch(AdddataFail())
   })
}


  const getData = (dispatch) => {
      dispatch(getdataReq())
  return axios.get(`https://sore-cyan-llama-robe.cyclic.app/data`)
    .then((res)=>{
        dispatch(getdataSucess(res.data))
    }).catch((e)=>{
        dispatch(getdataFail())
    })
  }



//  --------------




  export {getData ,ADDProducts }
