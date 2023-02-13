import * as types from "./actionTypes"

 const intailState = {
     productData:[],
     isLoading:false,
     isError:false,
     UserData:[]
 }


export const reducer = ( state=intailState,action ) => {
    const {type, payload} = action;

      switch(type){
        case types.GET_DATA_REQUEST:
            return {
              ...state,
              isLoading: true,
            };
          case types.GET_DATA_SUCCESS:
            return {
              ...state,
              isLoading: false,
              isError: false,
              productData: payload,
            };
      
          case types.GET_DATA_FAILURE:
            return {
              ...state,
              isLoading: false,
              isError: true,
              productData: [],
            };
                   // ============= userdata 
                   case  types.USER_DATA_REQUEST : 
                   return {
                       ...state,
                       isLoading:true,
                   }
               
               case  types.USER_DATA_SUCCESS: 
                   return {
                       ...state,
                       isLoading:false,
                       isError:false,
                       UserData:payload
                   }
               
       
               case  types.USER_DATA_FAILURE : 
                   return {
                       ...state,
                       isLoading:false,
                       isError:true,
                       UserData:[]
                   }
               
       // ================
       

          default:
            return state;
        }

 
}
