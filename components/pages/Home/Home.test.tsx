import { render, waitFor } from "@testing-library/react";
import { mockProducts, mainTheme, mainStore } from "../../../tests/utils";
import Home from "../../pages/Home/Home";
import Request from "../../../integrations/request";

it("should call api on mount", async () => {
  Request.fetchProducts = jest
    .fn()
    .mockReturnValueOnce(Promise.resolve(mockProducts));
  const { container } = render(mainTheme(mainStore(<Home />)));
  await waitFor(() => expect(Request.fetchProducts).toBeCalledTimes(1));
  expect(container).toMatchSnapshot();
});
