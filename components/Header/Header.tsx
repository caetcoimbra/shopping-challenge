import { Container, Title, Subtitle } from "./styles";
import CartButton from "@/components/CartButton/CartButton";

export interface HeaderProps {
  onCart: () => void;
}

const Header = ({ onCart }: HeaderProps) => (
  <Container>
    <div>
      <Title>MKS</Title>
      <Subtitle>Sistemas</Subtitle>
    </div>
    <CartButton onClick={onCart} />
  </Container>
);

export default Header;
