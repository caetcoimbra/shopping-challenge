import ProductPrice from "@/components/ProductPrice/ProductPrice";
import CartCounter from "@/components/CartCounter/CartCounter";
import { Container, ProductName, Image, RemoveItemButton } from "./styles";
import { useAppDispatch } from "../../hooks/redux";
import {
  addItem,
  CountedProduct,
  reduceItem,
  removeItem,
} from "../../store/store";
import { ImCross } from "react-icons/im";

export interface CartCardProps {
  product: CountedProduct;
}

const CartCard = ({ product }: CartCardProps) => {
  const dispatch = useAppDispatch();

  const decrement = () => {
    if (product.quantity > 1) {
      dispatch(reduceItem(product));
    }
  };

  return (
    <Container>
      <RemoveItemButton onClick={() => dispatch(removeItem(product))}>
        <ImCross
          size={8}
          style={{
            verticalAlign: "middle",
            margin: "-1 0 0 -1",
            color: "#fff",
          }}
        />
      </RemoveItemButton>
      <Image src={product.photo} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <CartCounter
          quantity={product.quantity}
          onAdd={() => dispatch(addItem(product))}
          onSub={decrement}
        ></CartCounter>
        <ProductPrice style={{ height: 35 }} price={+product.price} />
      </div>
    </Container>
  );
};

export default CartCard;
