/**
 * Product card
 * Renders the product and it's variants
 * @param {IProduct} product - The default parent product
 */

 import { FC, ReactElement, MouseEvent, memo, useState } from "react";
 import { RiShoppingCart2Line } from "react-icons/ri";
 import { Button } from "../../../components/Button/Button";
 
 import { Card } from './ProductCard.styles';
 import { IProduct, IVariant } from  '../../../interfaces';
 
 interface IProductCardProps {
   product: IProduct;
 }
 
 const ProductCard: FC<IProductCardProps> = ({ product }): ReactElement => {
   const [ activeVariant, setActiveVariant ] = useState<IVariant>(product.variants[0]);
 
   const { name, defaultImage, description, variants } = product;
 
   // Adds the selected variant to the cart
   const handleAddProduct = (event:  MouseEvent<HTMLButtonElement>) => {
     event.preventDefault();
 
     if (activeVariant){
      console.log(activeVariant)
     }
   }
 
   return (
     <Card>
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
 
 
       <div className="actions">
         <Button onClick={handleAddProduct}><RiShoppingCart2Line /></Button>
       </div>
     </Card>
   );
 };
 
 export default memo(ProductCard);