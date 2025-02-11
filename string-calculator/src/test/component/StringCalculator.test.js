import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "../../components/StringCalculator";

test("renders input field and button", () => {
  render(<StringCalculator />);
  expect(screen.getByPlaceholderText("Enter numbers")).toBeInTheDocument();
  expect(screen.getByText("Calculate")).toBeInTheDocument();
});

test("calculates sum for valid input", () => {
  render(<StringCalculator />);
  const input = screen.getByPlaceholderText("Enter numbers");
  const button = screen.getByText("Calculate");

  fireEvent.change(input, { target: { value: "1,2,3" } });
  fireEvent.click(button);

  expect(screen.getByText("Sum: 6")).toBeInTheDocument();
});

test("displays error for negative numbers", () => {
  render(<StringCalculator />);
  const input = screen.getByPlaceholderText("Enter numbers");
  const button = screen.getByText("Calculate");

  fireEvent.change(input, { target: { value: "-1,2,-3" } });
  fireEvent.click(button);

  expect(
    screen.getByText("Negative numbers not allowed: -1, -3")
  ).toBeInTheDocument();
});
