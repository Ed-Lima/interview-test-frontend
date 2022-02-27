import { AnyAction } from "redux";

import { ICartItem } from "../../../interfaces";

const initialState: ICartItem[] = [];

export const cartReducer = (state = initialState, action: AnyAction) => {
    switch(action.type) {
        // Add item to the store
        case 'cart/productAdded': {
            const cart = state.slice();
            const index = cart.findIndex((item: ICartItem) => item.id === action.payload.id);

            if(index < 0){
                return [...state, action.payload]
            }
            return state
        }
        case 'cart/productChanged': {

            // Get item index and replace information
            const cart = state.slice();
            const index = cart.findIndex((item: ICartItem) => item.id === action.payload.id);

            if(index > -1) {
                cart[index] = action.payload;
                return cart;
            }

            return [...state]
        }

        // Remove item from the store
        case 'cart/productRemoved': {
            return state.filter((item: ICartItem) => item.id !== action.payload.id);
        }
        default:
            return state
    }
}