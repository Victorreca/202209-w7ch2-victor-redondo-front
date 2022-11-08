import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProviderWrapper from "../../mocks/ProviderWrapper";
import Form from "./Form";

const mockCreateRobotAction = jest.fn();

jest.mock("../../hooks/useApi.ts", () => {
  return () => ({
    createRobot: mockCreateRobotAction,
  });
});

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 5 input elements", () => {
      const expectedInputs = 5;

      render(<Form />, { wrapper: ProviderWrapper });

      const inputs = screen.queryAllByRole("textbox");

      expect(inputs).toHaveLength(expectedInputs);
    });
  });

  describe("When its 'Delete' is clicked", () => {
    test("Then the form should be submited", async () => {
      const expectedButtonText = "Create";

      render(<Form />, { wrapper: ProviderWrapper });

      const nameInput = screen.queryByLabelText("Name")!;
      await userEvent.type(nameInput, "Bender");
      const imageInput = screen.queryByLabelText("Image")!;
      await userEvent.type(imageInput, "bender.jpg");
      const speedInput = screen.queryByLabelText("Speed")!;
      await userEvent.type(speedInput, "8");
      const enduranceInput = screen.queryByLabelText("Endurance")!;
      await userEvent.type(enduranceInput, "8");
      // const creationDateInput = screen.queryByLabelText("Creation Date")!;
      // await userEvent.type(creationDateInput, "22-09-2022");

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(button).toHaveTextContent(expectedButtonText);
      expect(mockCreateRobotAction).toHaveBeenCalled();
    });
  });
});
