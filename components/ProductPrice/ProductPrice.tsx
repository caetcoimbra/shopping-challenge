import { Container } from "./styles";
export interface ProductPriceProps {
  price: number;
}

const formatBrlCurrency = (value: number) =>
  value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

const ProductPrice = ({ price }: ProductPriceProps) => {
  return <Container>{formatBrlCurrency(price)}</Container>;
};

export default ProductPrice;
