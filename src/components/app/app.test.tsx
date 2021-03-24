import { render, screen } from "@testing-library/react";
import App from "./app";

test("renders OWR title", () => {
  render(<App />);
  const title = screen.getByText(/OWR/i);
  expect(title).toBeInTheDocument();
});
