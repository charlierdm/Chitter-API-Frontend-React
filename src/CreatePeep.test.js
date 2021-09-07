import { render, screen, fireEvent } from "@testing-library/react";
import { CreatePeep } from "./CreatePeep";

it('allows the user to enter text', () => {
  render(<CreatePeep />)
  const textArea = screen.getByPlaceholderText("What would you like to post today?");
  expect(textArea).toBeInTheDocument();
  fireEvent.change(textArea, { target: { value: "Hi there!" } });
  expect(textArea.value).toEqual("Hi there!")
}) 

