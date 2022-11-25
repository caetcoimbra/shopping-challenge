import { FaShoppingCart } from "react-icons/fa";
import { Container, Counter } from "./styles";

const CartButton = () => {
  return (
    <Container>
      <FaShoppingCart />
      <Counter>0</Counter>
    </Container>
  );
};

export default CartButton;
