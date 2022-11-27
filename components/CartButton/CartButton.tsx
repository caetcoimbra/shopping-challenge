import { FaShoppingCart } from "react-icons/fa";
import { Container, Counter } from "./styles";
import { useAppSelector } from "../../hooks/redux";
import { selectProductsCount } from "../../store/store";

export interface CartButtonProps {
  onClick?: () => void;
}

const CartButton = ({ onClick }: CartButtonProps) => {
  const cartProductsCount = useAppSelector(selectProductsCount);
  return (
    <Container onClick={onClick}>
      <FaShoppingCart />
      <Counter>{cartProductsCount}</Counter>
    </Container>
  );
};

export default CartButton;
