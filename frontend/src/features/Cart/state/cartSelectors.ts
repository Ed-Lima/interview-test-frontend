import { createSelector } from 'reselect';

import { RootState } from '../../../reducer';

// Get all products from the cart
export const selectAllCart = createSelector(
    (state: RootState) => state.cart,
    cart => cart
)