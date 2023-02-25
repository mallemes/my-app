import {auth} from "./AuthReducer";

const  INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const  beforeState = {
    initialized: false,
}

export const AppReducer = (state=beforeState, action)=>{
    if(action.type === INITIALIZED_SUCCESS){
        return {
            ...state,
            initialized:true,
        }
    }
    return state;
}
const setInit =()=> ({type:INITIALIZED_SUCCESS})
export const setInitialized =()=>(dispatch) =>{
    const promise = dispatch(auth());
    promise.then(()=>{
        dispatch(setInit())
    })
}
