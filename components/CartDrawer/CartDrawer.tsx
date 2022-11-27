import { ImCross } from "react-icons/im";
import {
  Wrapper,
  Container,
  Title,
  CloseButton,
  CheckoutButton,
  CartProducts,
  TotalPrice,
} from "./styles";
import CartCard from "../CartCard/CartCard";
import { useAppSelector } from "../../hooks/redux";
import { selectProducts, selectTotal } from "../../store/store";
import { formatBrlCurrency } from "../../utils";

export interface CartDrawer {
  visible: boolean;
  onClose: () => void;
}

const CartDrawer = ({ visible, onClose }: CartDrawer) => {
  const products = useAppSelector(selectProducts);
  const total = useAppSelector(selectTotal);
  return (
    <>
      <Wrapper onClick={onClose} visible={visible}></Wrapper>
      <Container visible={visible}>
        <Title>Carrinho de Compras</Title>
        <CloseButton onClick={onClose}>
          <ImCross style={{ verticalAlign: "middle" }} />
        </CloseButton>
        <CartProducts>
          {products.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </CartProducts>
        <TotalPrice>
          <span>Total:</span>
          <span>{formatBrlCurrency(total)}</span>
        </TotalPrice>
        <CheckoutButton>Finalizar Compra</CheckoutButton>
      </Container>
    </>
  );
};

export default CartDrawer;
