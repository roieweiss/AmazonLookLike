import {createContext, useReducer  } from "react";
import storeReducer from "./Reducers/storeReducer";
import { PropTypes } from "../imports";

export const Store = createContext();
const initialState = {
userInfo:localStorage.getItem('userInfo')
?JSON.parse(localStorage.getItem('userInfo'))
:null,
cart:{
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    :[],
    shippingAdress: localStorage.getItem("shippingAddress")
    ?JSON.parse(localStorage.getItem("shippingAddress"))
    :{},
    paymentMethod : localStorage.getItem("paymentMethod")
    ?JSON.parse(localStorage.getItem("paymebtMethod"))
    :"",
},
};

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(storeReducer,initialState)
    const body = {state,dispatch};
    return <Store.Provider value={body}>{children}</Store.Provider>
}
StoreProvider.propTypes = {children:PropTypes.node}