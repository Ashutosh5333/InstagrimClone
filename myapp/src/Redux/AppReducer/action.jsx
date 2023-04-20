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

         //  --------- My Post --------  //

const MydatapostReq = () =>{
   return {
      type: types.MYPOST_DATA_REQUEST,
   }
} 
const MyAdddataPostSucess = (payload) => {
   return {
      type :types.MYPOST_DATA_SUCCESS,
      payload,
   }
}
const MyAdddataPostFail = () => {
  return { 
      type :types.MYPOST_DATA_FAILURE
  }
}


 const singleUserprofilerequest = () =>{
    return {
       type:types.SingleUserProfile_DATA_REQUEST,
    }
 }
 const singleUserprofileSuccess = (payload) =>{
   return {
      type:types.SingleUserProfile_DATA_SUCCESS,
      payload,
   }
}
const singleUserprofilefailure = () =>{
   return {
      type:types.SingleUserProfile_DATA_FAILURE,
   }
}






 const token = JSON.parse(localStorage.getItem("token"))


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

// --------------- Delete ----------------  //

const DeleteDatareq = () =>{
   return {
      type: types.DELETE_DATA_REQUEST
   }
} 
const Deletedatasucess = (payload) => {
   return {
      type :types.DELETE_DATA_SUCCESS,
   }
}
const Deletedatafai = () => {
  return {
      type :types.DELETE_DATA_FAILURE
  }
  }


  // ============    Get User Data searchbar  =================  //


export const GetUserData = (dispatch) => {
      dispatch(getuserdataReq)
      return axios.get(`https://drab-ruby-swallow-toga.cyclic.app/insta` ,{
         headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          },
      })
      .then((res)=>{
      return   dispatch(getuserdataSucess(res.data))
      })
      .catch((e)=>{  
      return    dispatch(getuserdataFail())
      })
}



const  ADDProducts =(newdata) => (dispatch) => {
  dispatch(AdddataReq)
  return axios.post(`https://drab-ruby-swallow-toga.cyclic.app/create`,newdata ,{
   headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })
   .then((res) => {
    return   dispatch(AdddataSucess(res.data));
   }).catch((e)=> {
   return    dispatch(AdddataFail())
   })
}


  const getData = (dispatch) => {
      dispatch(getdataReq())
  return axios.get(`https://drab-ruby-swallow-toga.cyclic.app/insta`,{
       headers:{
         "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`
       },
  })
    .then((res)=>{
    return    dispatch(getdataSucess(res.data))
    }).catch((e)=>{
     return    dispatch(getdataFail())
    })
  }


   // -------------- Delete data -------------  //

    
 export  const getDeleteData =(_id) => (dispatch) => {
   dispatch(DeleteDatareq())
return axios.delete(`https://drab-ruby-swallow-toga.cyclic.app/insta/delete/${_id}`,{
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
})
 .then((res)=>{
 return    dispatch(Deletedatasucess(res))
 }).catch((e)=>{
  return    dispatch(Deletedatafai())
 })
}


// ---------------- My post -------------- //

export const GetMypost = (dispatch) => {
   dispatch(MydatapostReq)
   return axios.get(`https://drab-ruby-swallow-toga.cyclic.app/mypost` ,{
      headers:{
         "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`
       },
   })
   .then((res)=>{
   return   dispatch(MyAdddataPostSucess(res.data))
   })
   .catch((e)=>{  
   return    dispatch(MyAdddataPostFail())
   })
}



//  ---------------   Single user Request  --------------  //

export const SingleUserprofile = (userId) => (dispatch) =>{
        dispatch(singleUserprofilerequest())
       return  axios.get(`https://drab-ruby-swallow-toga.cyclic.app/user/${userId}`,{
         headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          },
       }).then((res) =>{
          return dispatch(singleUserprofileSuccess(res.data))
       }).catch((err) =>{
        return   dispatch(singleUserprofilefailure())
       })
}









//  --------------




  export {getData ,ADDProducts }
