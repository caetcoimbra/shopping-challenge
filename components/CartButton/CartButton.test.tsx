import { render } from "@testing-library/react";
import CartButton from "@/components/CartButton/CartButton";

it("CartButton and snapshot must be equal", () => {
  const { container } = render(<CartButton />);
  expect(container).toMatchSnapshot();
});
