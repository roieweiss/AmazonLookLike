import {createContext, useReducer  } from "react";
import storeReducer from "./Reducers/storeReducer";
import { PropTypes } from "../imports";

export const Store = createContext();
const initialState = {
userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
};

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(storeReducer,initialState)
    const body = {state,dispatch};
    return <Store.Provider value={body}>{children}</Store.Provider>
}
StoreProvider.propTypes = {children:PropTypes.node}