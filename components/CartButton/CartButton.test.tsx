import { render } from "@testing-library/react";
import CartButton from "@/components/CartButton/CartButton";
import { mainStore } from "../../tests/utils";

it("CartButton and snapshot must be equal", () => {
  const { container } = render(mainStore(<CartButton />));
  expect(container).toMatchSnapshot();
});
