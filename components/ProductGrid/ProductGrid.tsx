import ProductCard from "@/components/ProductCard/ProductCard";
import { Container } from "./styles";
import { Product } from "../../integrations/request";

export interface ProductsProps {
  products: Product[];
  loading: boolean;
  skeletonsCount?: number;
}

const ProductGrid = ({
  products,
  loading,
  skeletonsCount = 8,
}: ProductsProps) => {
  return (
    <Container>
      {loading
        ? Array.from({ length: skeletonsCount }).map((_, i) => (
            <ProductCard.Skeleton key={i} />
          ))
        : products.map((product) => (
            <li key={product.id}>
              <ProductCard {...product}></ProductCard>
            </li>
          ))}
    </Container>
  );
};

export default ProductGrid;
