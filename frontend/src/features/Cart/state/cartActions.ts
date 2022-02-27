import { Action, ActionCreator } from "redux";
import { ICartItem } from "../../../interfaces";

// Action to add item in the cart
export const cartProductAdded: ActionCreator<Action> = (
  product: ICartItem
) => (
  {
    type: 'cart/productAdded',
    payload: product
  }
);

// Action to update item information in the cart
export const cartProductChanged: ActionCreator<Action> = (
  product: ICartItem
) => (
  {
    type: 'cart/productChanged',
    payload: product
  }
);

// Action to remove item from the cart
export const cartProductRemoved: ActionCreator<Action> = (
  product: ICartItem
) => (
  {
    type: 'cart/productRemoved',
    payload: product
  }
);