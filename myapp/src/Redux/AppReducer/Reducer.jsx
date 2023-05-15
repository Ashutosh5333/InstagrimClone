import * as types from "./actionTypes"

 const intailState = {
     productData:[],
     isLoading:false,
     isError:false,
     UserData:[],
     Mypost:[],
     Singleuser:[],
     Alluser:[],
     AllReel:[],
     SingleData:[]
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
            
            case types.SingleUserProfile_DATA_REQUEST :
              return {
                ...state,
                isLoading: true,
              };
            case types.SingleUserProfile_DATA_SUCCESS:
              return {
                ...state,
                isLoading: false,
                isError: false,
                Singleuser: payload,
              };
        
            case types.SingleUserProfile_DATA_FAILURE:
              return {
                ...state,
                isLoading: false,
                isError: true,
                Singleuser: [],
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
     
               case  types.MYPOST_DATA_REQUEST : 
               return {
                   ...state,
                   isLoading:true,
               }
           
           case  types.MYPOST_DATA_SUCCESS: 
               return {
                   ...state,
                   isLoading:false,
                   isError:false,
                   Mypost:payload
               }
           case  types.MYPOST_DATA_FAILURE : 
               return {
                   ...state,
                   isLoading:false,
                   isError:true,
                   Mypost:[]
               }

               case  types.USER_DATA_SUCCESS: 
               return {
                   ...state,
                
                   Alluser:payload
               }

                 case  types.AllREEL_DATA_SUCCESS: 
               return {
                   ...state,
                   AllReel:payload
               }

               case  types.SingleUserDATA_SUCCESS: 
               return {
                   ...state,
                   SingleData:payload
               }

       

          default:
            return state;
        }

 
}
