import ProductPrice from "@/components/ProductPrice/ProductPrice";
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

const ProductCard = (props: Product) => (
  <Container>
    <ProductImage src={props.photo} alt={props.name} />
    <ProductDetail>
      <ProductName>{props.name}</ProductName>
      <ProductPrice price={+props.price} />
    </ProductDetail>
    <ProductDescription>{props.description}</ProductDescription>
    <div style={{ flex: 1 }}></div>
    <AddToCartButton>
      <BagIcon /> Comprar
    </AddToCartButton>
  </Container>
);

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
