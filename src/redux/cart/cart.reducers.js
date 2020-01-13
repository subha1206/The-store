import CartActionTypes from './cart.types'
import { addItemsToCart, removeItemFromCart } from './cart.utils'
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducers = ( state= INITIAL_STATE, action={}) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id
                    )
            }
        case CartActionTypes.REMMOVE_ITEMS:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
    
        default:
            return state;
    }
}

export default cartReducers;