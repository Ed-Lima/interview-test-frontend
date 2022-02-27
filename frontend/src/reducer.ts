import { combineReducers } from "redux";

import { productReducer } from "./features/Products/state/productReducers";

const rootReducer = combineReducers({
    products: productReducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>