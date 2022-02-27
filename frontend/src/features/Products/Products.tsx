/**
 * Product List
 * Fetch and renders all products from store
 */

 import { useEffect } from 'react';
 import { useDispatch, useSelector } from 'react-redux'
 import { fetchProducts } from './state/productReducers';
 
 import ProductCard from './ProductCard/ProductCard';
 import { selectAllProducts, selectStatusProducts } from './state/productSelectors';
 import { IProduct } from '../../interfaces';
 
 import { Container } from './Products.styles';
 
 export const Products = () => {
     const dispatch = useDispatch();
     const products = useSelector(selectAllProducts);
     const status = useSelector(selectStatusProducts);
 
     useEffect(() => {
         dispatch(fetchProducts());
     }, [dispatch])
 
     return (
         <Container>
             {status === 'loading' && <div>Loading</div>}
             {products.map((productItem: IProduct) => (
                     <ProductCard key={productItem.id} product={productItem} />
                 )
             )}
         </Container>
     );
 };
 