import { FC, ReactElement } from "react";

export interface IProduct {
  name: string;
  description: string;
  imageSrc: string;
}

interface IProductCardProps {
  product: IProduct;
}

const ProductCard: FC<IProductCardProps> = ({ product }): ReactElement => {
  const { name, imageSrc, description } = product;

  return (
    <div className="product-card-container">
      <img src={imageSrc} />
      <div className="product-card-details">
        <span className="product-name">{name} </span>
        <span className="product-description"> {description} </span>
      </div>
    </div>
  );
};

export default ProductCard;
