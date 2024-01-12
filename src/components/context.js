import { createContext, useReducer } from 'react';
import { reducer } from './reducer'

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isCartShow: false,
    alertName: '',
}

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    } 

    value.handleCartShow = () => {
        dispatch({type: 'CART_SHOW'})
    }

    value.cartPlus = (itemId) => {
        dispatch({type: 'CART_PLUS', payload: { id: itemId }})
    }

    value.cartMinus = (itemId) => {
        dispatch({type: 'CART_MINUS', payload: { id: itemId }})
    }

    value.addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
    }

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' })
    }

    value.removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } })
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
} 