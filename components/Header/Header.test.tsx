import { render } from "@testing-library/react";
import { mainTheme } from "../../tests/utils";
import Header from "@/components/Header/Header";

it("Header and snapshot must be equal", () => {
  const { container } = render(mainTheme(<Header />));
  expect(container).toMatchSnapshot();
});
