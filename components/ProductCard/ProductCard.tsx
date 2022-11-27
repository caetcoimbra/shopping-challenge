import ProductPrice from "@/components/ProductPrice/ProductPrice";
import { addItem } from "../../store/store";
import { useAppDispatch } from "../../hooks/redux";

import {
  Container,
  ProductImage,
  ProductDetail,
  ProductName,
  ProductDescription,
  AddToCartButton,
  BagIcon,
  Skeleton,
  Text,
  Box,
} from "./styles";

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

const ProductCard = (product: Product) => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <ProductImage src={product.photo} alt={product.name} />
      <ProductDetail>
        <ProductName>{product.name}</ProductName>
        <ProductPrice style={{ height: 30 }} price={+product.price} />
      </ProductDetail>
      <ProductDescription>{product.description}</ProductDescription>
      <div style={{ flex: 1 }}></div>
      <AddToCartButton onClick={() => dispatch(addItem(product))}>
        <BagIcon /> Comprar
      </AddToCartButton>
    </Container>
  );
};

const CardSkeleton = () => {
  return (
    <Skeleton>
      <Box />
      <Text />
      <Text />
      <Text />
    </Skeleton>
  );
};

ProductCard.Skeleton = CardSkeleton;

export default ProductCard;
