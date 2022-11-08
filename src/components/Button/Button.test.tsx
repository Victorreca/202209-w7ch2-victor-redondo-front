import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When its rendered with the text 'Delete'", () => {
    test("Then it should show 'Delete' on it", () => {
      const expectedText = "Delete";

      render(<Button action={() => {}} text="Delete" />);

      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(expectedText);
    });
  });

  describe("When it receives an ction", () => {
    test("Then it should call an action on click", async () => {
      const buttonAction = jest.fn();

      render(<Button action={buttonAction} text="" />);

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
