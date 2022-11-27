import { Container } from "./styles";
import { CSSProperties } from "react";
import { formatBrlCurrency } from "../../utils";

export interface ProductPriceProps {
  price: number;
  style?: CSSProperties;
}

const ProductPrice = ({ price, style }: ProductPriceProps) => {
  return <Container style={style}>{formatBrlCurrency(price)}</Container>;
};

export default ProductPrice;
