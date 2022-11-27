import { render } from "@testing-library/react";
import { mainStore, mainTheme } from "../../tests/utils";
import Header from "@/components/Header/Header";

it("Header and snapshot must be equal", () => {
  const { container } = render(
    mainTheme(mainStore(<Header onCart={jest.fn} />))
  );
  expect(container).toMatchSnapshot();
});
