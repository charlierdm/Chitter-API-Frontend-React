import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { SignUp } from "./SignUp";

it("renders the sign up form", () => {
  render(<SignUp />);
  expect(screen.getByPlaceholderText("username")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
  expect(screen.getByText("Sign Up")).toBeInTheDocument();
});

it("accepts user input into the forms", () => {
  render(<SignUp />);
  const username = screen.getByPlaceholderText("username");
  const password = screen.getByPlaceholderText("password");
  fireEvent.change(username, { target: { value: "Charlie" } });
  expect(username.value).toEqual("Charlie");
  fireEvent.change(password, { target: { value: "password123" } });
  expect(password.value).toEqual("password123");
});

it("creates an account upon entering details and clicking sign up", () => {
  render(<SignUp />);
  const username = screen.getByPlaceholderText("username");
  const password = screen.getByPlaceholderText("password");
  const sendUserRequest = jest.fn();
  fireEvent.change(username, { target: { value: "Charlie" } });
  fireEvent.change(password, { target: { value: "password123" } });
  fireEvent.click(screen.getByText("Sign Up"));
});
