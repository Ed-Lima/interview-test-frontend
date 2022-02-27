/**
 * Product Variants options
 * @param {string} productId - Parent product ID
 * @param {IVariant[]} variants - List of product variants
 * @returns {ReactElement} - Renders a list of variants for product
 */

 import { FC, ReactElement, MouseEvent, useState } from "react";
 import { IVariant } from '../../../interfaces';
 
 import { RadioBox, VariantOptions } from "./ProductVariants.styles";
 
 interface IProductVariantProps {
     productId: string;
     variants: IVariant[];
     handleChange: (variant: IVariant) => void;
 }
 
 const ProductVariants: FC<IProductVariantProps> = ({ productId, variants, handleChange }): ReactElement => {
     const [ activeVariant, setActiveVariant ] = useState<IVariant>(variants[0]);
 
     // Triggered when the variant image is selected
     const handleSelectVariant = (
         event: MouseEvent<HTMLLabelElement>, 
         variant: IVariant
     ) => {
         setActiveVariant(variant);
         handleChange(activeVariant);
     }
 
     return(
         <VariantOptions>
             {
                 variants.map((variant: IVariant) => {
                     const { id, image, isDiscontinued, quantity } = variant;
                     const isValid = !isDiscontinued && !!quantity;
 
                     return(
                         <RadioBox 
                             key={id} 
                             onClick={(event) => handleSelectVariant(event, variant)}
                             isActive={id === activeVariant.id}
                             isValid={isValid}
                         >
                             <input className="radio" type="radio" name={productId} />
                             <img
                                 src={image} 
                                 alt={id}
                             />
                         </RadioBox>
                     )
                 })
             }
         </VariantOptions>
     )
 };
 
 export default ProductVariants;