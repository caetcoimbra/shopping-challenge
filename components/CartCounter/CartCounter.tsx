import { Container, Button, Counter } from "./styles";

export interface CartCounterProps {
  quantity: number;
  onAdd: () => void;
  onSub: () => void;
}

const CartCounter = ({ onSub, quantity = 1, onAdd }: CartCounterProps) => {
  return (
    <Container>
      <Button
        disabled={quantity === 1}
        onClick={onSub}
        style={{ fontSize: "24px", lineHeight: "29px" }}
      >
        -
      </Button>
      <Counter>{quantity}</Counter>
      <Button onClick={onAdd} style={{ fontSize: "22px", lineHeight: "27px" }}>
        +
      </Button>
    </Container>
  );
};

export default CartCounter;
