import { combineReducers } from "redux";

import { cartReducer } from "./features/Cart/state/cartReducers";
import { productReducer } from "./features/Products/state/productReducers";

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>