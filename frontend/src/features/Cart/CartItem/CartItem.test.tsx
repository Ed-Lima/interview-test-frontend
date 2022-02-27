import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux'; 

import { CartItem } from './CartItem';
import { ICartItem } from '../../../interfaces';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
}));

describe('CartItem component', () => {
    it('should render correctly', () => {
        const cartItem: ICartItem = {
            id: '123',
            name: 'fake-product',
            defaultImage: 'image',
            totalQuantity: 1,
            quantity: 1,
            price: 1
        }
        render(<CartItem cartItem={cartItem} />)

        const item = screen.getByText(cartItem.name);
        
        expect(item).toBeInTheDocument();
    })

    it('should add quantity to cart item', () => {
        const cartItem: ICartItem = {
            id: '0000',
            name: 'fake-product',
            defaultImage: 'image',
            totalQuantity: 10,
            quantity: 1,
            price: 1
        }

        render(<CartItem cartItem={cartItem} />)
        
        
        const add = screen.getByText('+');

        fireEvent.click(add);

        expect(screen.getByText('2')).toBeInTheDocument();
    });

    it('should remove quantity from cart item', () => {
        const cartItem: ICartItem = {
            id: '0000',
            name: 'fake-product',
            defaultImage: 'image',
            totalQuantity: 9,
            quantity: 8,
            price: 2
        }

        render(<CartItem cartItem={cartItem} />)
        
        
        const remove = screen.getByText('-');

        fireEvent.click(remove);

        expect(screen.getByText('7')).toBeInTheDocument();
    })
})