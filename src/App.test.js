import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import {removeCamelCaseWithSpaces} from './App';

test("button has correct initial color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: /change color to blue/i,
  });
  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked once and red when clicked twice", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: /change color to blue/i,
  });
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton.textContent).toBe("Change color to red");

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  expect(colorButton.textContent).toMatch(/change color to blue/i);
});

test("Initial : Button starts out enabled and checkbox is unchecked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: /change color to [\w]*/i,
  });

  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("When checkbox is checked button is disabled , when it is checked again button is enabled", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable Button" });
  fireEvent.click(checkBox);
  const colorButton = screen.getByRole("button", {
    name: /change color to [\w]*/i,
  });
  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});

test("Button turns gray when disabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: /change color to [\w]*/i,
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
});

test("initial : disable button and button turns gray , enable button and button becomes red", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: /change color to [\w]*/i,
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("disable button and button turns gray , enable button and button turns blue", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: /change color to [\w]*/i,
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

describe("Testing spaces before capital letter function",()=>{

	test("Runs for case with no inner capital letters",()=>{
		expect(removeCamelCaseWithSpaces('Red')).toBe("Red");
	});
	test("Runs for case with one capital letter",()=>{
		expect(removeCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
	});
	test("Runs for case with multiple capital letters",()=>{
		expect(removeCamelCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
	});
});