const storeReducer = (state, action) => {
    switch (action.type) {
        case USER_SIGNIN:{
            return {...state, iserInfo : action.payload}
        }
        default: return {...state };
    }
    }
    export default storeReducer;