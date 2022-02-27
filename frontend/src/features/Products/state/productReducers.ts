import { AnyAction } from 'redux';
import { IProduct } from '../../../interfaces';

import { api } from '../../../services/api';
import { productsLoaded, productsLoading } from './productActions';

interface IProductsState {
    status: string,
    entities: IProduct[]
}

const initialState: IProductsState = {
    status: 'idle',
    entities: []
}

export const productReducer = (state = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'products/productsLoading': {
            return {
                ...state,
                status: 'loading'
            }
        }
        case 'products/productsLoaded': {
            return {
                ...state,
                status: 'idle',
                entities: [
                    ...state.entities,
                    ...action.payload
                ]
            }
        }
        default:
            return state
    }
}

export const fetchProducts = () => async (dispatch: any) => {
    dispatch(productsLoading());
    const response = await api.get('products');
    dispatch(productsLoaded(response.data.products))
}
