/**
 * Cart Item
 * @param {ICartItem} cartItem - Product that was added to cart
 */

 import { FC, ReactElement, useEffect, useState } from 'react';
 import { Button } from '../../../components/Button/Button';
 import { Card, CardContent } from './CartItem.styles';
 
 import { ICartItem } from '../../../interfaces';
 import { RiDeleteBin6Fill } from 'react-icons/ri';
 import { useDispatch } from 'react-redux';
 import { cartProductChanged, cartProductRemoved } from '../state/cartActions';
 
 interface ICartItemProps {
   cartItem: ICartItem;
 }
 
 export const CartItem: FC<ICartItemProps> = ({ cartItem }): ReactElement => {
 
   const dispatch = useDispatch();
   const { name, defaultImage, quantity, totalQuantity, price } = cartItem;
   const [ itemQuantity, setItemQuantity ] = useState(quantity);
   const itemPrice = itemQuantity * price;
 
   // Remove item from store
   const handleItemRemove = () => {
     dispatch(cartProductRemoved(cartItem))
   }
 
   // Adds item quantity, if available in stock
   const handleAddQuantity = () => {
     setItemQuantity(prevState => {
       if(totalQuantity > prevState) {
         return prevState + 1
       }
 
       return prevState
     });
   }
 
   // Removes item quantity
   const handleRemoveQuantity = () => {
     setItemQuantity(prevState => {
       if(prevState > 1) {
         return prevState - 1
       }
 
       return prevState
     });
   }
 
   // Updates the store, if the quantity has changed
   useEffect(()=>{
     dispatch(cartProductChanged({...cartItem, quantity: itemQuantity}))
   },[itemQuantity, dispatch])
 
   return (
     <Card>
       <button className='remove' onClick={handleItemRemove}><RiDeleteBin6Fill /></button>
       <img alt={name} src={defaultImage} />
       
       <CardContent>
         <div className="title">{name}</div>
         <div className="details">
           <div className="quantity">
             <Button onClick={handleRemoveQuantity} disabled={itemQuantity === 1}>-</Button>
               {itemQuantity}
             <Button onClick={handleAddQuantity} disabled={itemQuantity === totalQuantity}>+</Button>
           </div>
           <div className="price">
             {
               new Intl.NumberFormat('en-US', {
                 style: 'currency',
                 currency: 'USD'
               }).format(itemPrice/ 100)
             }
           </div>
         </div>
       </CardContent>
     </Card>
   );
 };
 