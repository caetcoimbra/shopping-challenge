import { render } from "@testing-library/react";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { mockProducts, mainTheme } from "../../tests/utils";

it("skeletons must be rendered", () => {
  const { container } = render(<ProductGrid products={[]} loading />);
  expect(container).toMatchSnapshot();
});

it("products must be rendered", () => {
  const { container } = render(
    mainTheme(<ProductGrid products={mockProducts} loading={false} />)
  );
  expect(container).toMatchSnapshot();
});
