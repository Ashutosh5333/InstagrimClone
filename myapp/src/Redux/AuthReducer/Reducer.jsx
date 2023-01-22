import * as types  from "./actionTypes"

const initialState = {
    isLoading:false,
    isERROR:false,
    token:""
}


const reducer = (state=initialState,{type,payload})=>{


     switch(type){   
        case  types.GET_SIGNUP_REQUEST : 
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        
        case  types.GET_SIGNUP_SUCCESS : {
            return {
                ...state,
                isLoading:false,
                isError:false,
                token:payload
            }
        } 

        case  types.GET_SIGNUP_FAILURE : 
            return {
                ...state,
                isLoading:true,
                isError:false,
                token:""
            }
        

        case  types.GET_LOGIN_SUCCESS : 
            return {
                ...state,
                isLoading:false,
                isError:false,
                token:payload
            }

        default:
            return state
     }
}

export {reducer} 