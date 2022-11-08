import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useApi from "../../hooks/useApi";
import mockRobot from "../../mocks/mockRobot";
import ProviderWrapper from "../../mocks/ProviderWrapper";
import RobotCard from "./RobotCard";

const mockDeleteRobotAction = jest.fn();

jest.mock("../../hooks/useApi.ts", () => {
  return () => ({
    deleteRobot: mockDeleteRobotAction,
  });
});

describe("Given a RobotCard component", () => {
  describe("When its rendered with the robot 'Terminator'", () => {
    const terminatorRobot = mockRobot;
    test("The it should show a level 3 heading with text 'Terminator'", () => {
      const terminatorRobot = mockRobot;
      const robotName = "Terminator";

      render(<RobotCard robot={terminatorRobot} />, {
        wrapper: ProviderWrapper,
      });

      const heading = screen.queryByRole("heading", { level: 3 });

      expect(heading).toHaveTextContent(robotName);
    });

    test("Then it should show a Button with text 'Delete' and its action should be invoked on click", async () => {
      const text = "DELETE";

      render(<RobotCard robot={terminatorRobot} />, {
        wrapper: ProviderWrapper,
      });

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(text);
      expect(mockDeleteRobotAction).toHaveBeenCalled();
    });
  });
});
