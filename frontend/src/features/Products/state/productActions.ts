import { Action, ActionCreator } from "redux";

import { IProduct } from "../../../interfaces";

export const productsLoaded: ActionCreator<Action> = (
  products: IProduct[]
) => (
  {
    type: 'products/productsLoaded',
    payload: products
  }
);

export const productsLoading: ActionCreator<Action> = () => (
  {
    type: 'products/productsLoading'
  }
);