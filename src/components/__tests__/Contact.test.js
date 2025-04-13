import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load the Contact Page", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load Contact email", () => {
  render(<Contact />);

  const email = screen.getByText(/email:/i);
  expect(email).toBeInTheDocument();
});

test("should load Contact paragraphs", () => {
  render(<Contact />);

  const paragraphs = screen.getAllByRole("paragraph");
  //console.log(paragraphs);
  //THIS IS CALLED ASSERTION
  expect(paragraphs.length).toBe(2);
});

test("should have phone number", () => {
  render(<Contact />);

  const phoneNumber = screen.getByTestId("phno");
  expect(phoneNumber).toHaveTextContent("+12 5678 3672");
});
