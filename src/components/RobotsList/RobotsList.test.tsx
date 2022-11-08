import { render, screen } from "@testing-library/react";
import mockState from "../../mocks/mockState";
import ProviderWrapper from "../../mocks/ProviderWrapper";
import renderWithProviders from "../../testUtils/renderWithProviders";
import RobotsList from "./RobotsList";

describe("Given a RobotsList component", () => {
  describe("When its renderes with a list of robots", () => {
    test("Then it should show a heading level 2 with the text 'Robots list:'", () => {
      const headingText = "The ultimate robots collection";

      render(<RobotsList />, { wrapper: ProviderWrapper });

      const heading = screen.queryByRole("heading", { level: 2 });

      expect(heading).toHaveTextContent(headingText);
    });

    test("Then it sould should show a list with 1 robotCard", () => {
      const robotName = "Terminator";

      renderWithProviders(<RobotsList />, {
        preloadedState: { robots: mockState },
      });

      const card = screen.queryByRole("heading", {
        level: 3,
        name: robotName,
      });

      expect(card).toBeInTheDocument();
    });
  });
});
