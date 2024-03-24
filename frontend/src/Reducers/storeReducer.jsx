import { USER_SIGNIN } from "../actions";

const storeReducer = (state, action) => {
    switch (action.type) {
        case USER_SIGNIN:{
            return {...state, iserInfo : action.payload}
        }
        case USER_SIGNOUT{
            return {...state, iserInfo : null}
        }
        default:
             return {...state };
    }
    }
    export default storeReducer;