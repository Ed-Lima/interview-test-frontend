import { RootState } from '../../../reducer';

export const selectAllProducts = (state: RootState) => state.products.entities;
export const selectStatusProducts = (state: RootState) => state.products.status;