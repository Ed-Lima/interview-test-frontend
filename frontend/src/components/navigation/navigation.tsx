/**
 * Header Component
 */
 import { useContext } from 'react';
 import { RiShoppingCart2Line } from 'react-icons/ri';
 
 import { CartContext } from '../../CartContext';
 import { Button } from '../Button/Button';
 
 import { Container, Content } from './Navigation.styles';
 
 export const Navigation = () => {
   const { isOpen, setIsOpen } = useContext(CartContext);
 
   const toggleCart = () => setIsOpen(!isOpen);
 
   return (
     <Container>
       <Content>
         <span className="title">Bonsai.</span>
         <Button onClick={toggleCart}><RiShoppingCart2Line /></Button>
       </Content>
     </Container>
   );
 };
 