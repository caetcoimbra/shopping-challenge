import { Container, Title, Subtitle } from "./styles";
import CartButton from "@/components/CartButton/CartButton";

const Header = () => (
  <Container>
    <div>
      <Title>MKS</Title>
      <Subtitle>Sistemas</Subtitle>
    </div>
    <CartButton />
  </Container>
);

export default Header;
