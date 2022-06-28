import { render, screen ,fireEvent} from "@testing-library/react";
import App from "./App";

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
  
  expect(colorButton).toHaveStyle({backgroundColor:"blue"});

  expect(colorButton.textContent).toBe("Change color to red");

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor:"red"});
  expect(colorButton.textContent).toMatch(/change color to blue/i);
});

test("Initial : Button starts out enabled and checkbox is unchecked",()=>{
	render(<App/>);
	const colorButton = screen.getByRole("button",{name: /change color to [\w]*/i});
	
	expect(colorButton).toBeEnabled();

	const checkbox= screen.getByRole("checkbox");
	expect(checkbox).not.toBeChecked();

});

test("When checkbox is checked button is disabled , when it is checked again button is enabled",()=>{

	render(<App/>);
	const checkBox=screen.getByRole("checkbox");
	fireEvent.click(checkBox);
	const colorButton=screen.getByRole("button",{name:/change color to [\w]*/i});
	expect(checkBox).toBeChecked();
	expect(colorButton).toBeDisabled();

	fireEvent.click(checkBox);
	expect(checkBox).not.toBeChecked();
	expect(colorButton).toBeEnabled();
});