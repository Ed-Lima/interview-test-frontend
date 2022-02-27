/**
 * Product card
 * Renders the product and it's variants
 * @param {IProduct} product - The default parent product
 */

 import { FC, ReactElement, MouseEvent, memo, useState, useContext } from "react";
 import { RiShoppingCart2Line } from "react-icons/ri";
 import { useDispatch } from 'react-redux';
 import { Button } from "../../../components/Button/Button";
 import { cartProductAdded } from '../../Cart/state/cartActions';
 import ProductVariants from "../ProductVariants/ProductVariants";
 
 import { Card } from './ProductCard.styles';
 import { IProduct, IVariant, SelectableOptions } from  '../../../interfaces';
import { CartContext } from "../../../CartContext";
 
 interface IProductCardProps {
   product: IProduct;
 }
 
 const ProductCard: FC<IProductCardProps> = ({ product }): ReactElement => {
   const dispatch = useDispatch();
   const { isOpen, setIsOpen } = useContext(CartContext);
   const [ activeVariant, setActiveVariant ] = useState<IVariant>(product.variants[0]);
 
   const { id, name, defaultImage, description, variants } = product;
 
   /**
    * Check if any product variant is valid
    * @param {IVariant[]} variants - All product variants
    * @returns {bool} - True if at least one variant is not discontinued and have quantity in stock 
    */
   const hasValidVariant = variants.some((variant: IVariant) => (!variant.isDiscontinued && !!variant.quantity));
 
   /**
    * Check if the product is valid
    * @param {bool} hasValidVariant - True if at least one variant is valid
    * @param {bool} product.isDiscontinued - True if the parent product is discontinued
    * @returns {bool} - True if product is valid
    */
   const isProductAvailable = hasValidVariant && !product.isDiscontinued;
 
   /**
    * Check if the selected variant is valid
    * @param {bool} activeVariant.isDiscontinued - True if variant is discontinued
    * @param {number} activeVariant.quantity - Total variant quantity in stock
    */
   const isActiveVariantValid = !activeVariant.isDiscontinued && !!activeVariant.quantity;
 
   // Adds the selected variant to the cart
   const handleAddProduct = (event:  MouseEvent<HTMLButtonElement>) => {
     event.preventDefault();
 
     if (activeVariant){
       dispatch(
         cartProductAdded({
           id: activeVariant.id,
           name: product.name,
           defaultImage: activeVariant.image,
           totalQuantity: activeVariant.quantity,
           quantity: 1,
           price: activeVariant.priceCents
         })
       )

       setIsOpen(true);
     }
   }
 
   const handleVariantChange = (variant: IVariant) => {
     setActiveVariant(variant);
   }
 
   return (
     <Card
       isAvailable={ isProductAvailable }
       isActiveVariantValid={isActiveVariantValid}
     >
       <span className="oos" >Out of Stock</span>
       <img className="card-image" alt={name} src={activeVariant?.image ? activeVariant.image : defaultImage} />
       <div className="title">{name}</div>
       <div className="description">{description}</div>
 
       <div className="price">
         {
           new Intl.NumberFormat('en-US', {
             style: 'currency',
             currency: 'USD'
           }).format(activeVariant?.priceCents/ 100)
         }
       </div>
 
       <ProductVariants productId={id} variants={variants} handleChange={handleVariantChange} />
 
       <div className="info">
         {
           activeVariant?.selectableOptions && 
           activeVariant?.selectableOptions.map((options: SelectableOptions, index: number) => (
             <div key={`${activeVariant.id} ${index}`}>
               <strong>{options.type}: </strong>
               <span>{options.value}</span>
             </div>
           ))
         }
       </div>
 
       <div className="actions">
         <Button onClick={handleAddProduct} disabled={!isActiveVariantValid || !isProductAvailable}><RiShoppingCart2Line /></Button>
       </div>
     </Card>
   );
 };
 
 export default memo(ProductCard);