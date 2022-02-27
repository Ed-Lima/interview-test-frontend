/**
 * Cart
 * Show all products that are in the cart
 */

 import { useContext } from 'react';
 import { useSelector } from 'react-redux'
 import { RiCloseFill } from 'react-icons/ri';
 
 import { CartItem } from './CartItem/CartItem';
 import { CartContext } from '../../CartContext';
 
 import { selectAllCart } from './state/cartSelectors';
 import { ICartItem } from '../../interfaces';
 import { Modal } from './Cart.styles';
 
 export const Cart = () => {
   // Get modal state
   const { setIsOpen } = useContext(CartContext);
 
   // Get all products from cart store
   const products = useSelector(selectAllCart);
 
   const closeCart = () => setIsOpen(false);
 
   // Calculates the total price based on item quantity ans its price
   /**
    * @param {number} quantity - Cart item quantity
    * @param {number} price - Cart item price
    */
   let totalPrice = 0;
   if (products.length > 0){
     totalPrice = products.reduce((total, { quantity, price }) => total + (price * quantity), 0).toFixed(2);
   }
 
   return (
     <Modal>
       <button className="close" onClick={closeCart}>
         <RiCloseFill />
       </button>
 
       { products.length > 0 &&
         products.map((product: ICartItem, index: number) => (
           <CartItem key={`${product.name} ${index}`} cartItem={product} />
         ))
       }
 
       <div className='total'>
         <span className='title'>
           Total: 
         </span>
         <span>
           {
             new Intl.NumberFormat('en-US', {
               style: 'currency',
               currency: 'USD'
             }).format(totalPrice/ 100)
           }
         </span>
       </div>
     </Modal>
   );
 };
 