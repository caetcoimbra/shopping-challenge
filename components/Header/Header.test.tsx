import { render } from "@testing-library/react";
import Home from "@/pages/index";
import { mainTheme } from "../../tests/utils";

it("Header and snapshot must be equal", () => {
  const { container } = render(mainTheme(<Home />));
  expect(container).toMatchSnapshot();
});
