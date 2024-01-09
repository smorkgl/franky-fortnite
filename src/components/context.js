import { createContext, useReducer } from 'react';
import { reducer } from './reducer'

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvider = ({ children }) => {
    const [value] = useReducer(reducer, initialState)

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' })
    }

    value.removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { itemId } })
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
} 