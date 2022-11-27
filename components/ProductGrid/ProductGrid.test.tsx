import { render } from "@testing-library/react";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { mockProducts, mainStore, mainTheme } from "../../tests/utils";

it("skeletons must be rendered", () => {
  const { container } = render(
    mainStore(<ProductGrid products={[]} loading />)
  );
  expect(container).toMatchSnapshot();
});

it("products must be rendered", () => {
  const { container } = render(
    mainTheme(
      mainStore(<ProductGrid products={mockProducts} loading={false} />)
    )
  );
  expect(container).toMatchSnapshot();
});
