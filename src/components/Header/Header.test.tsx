import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../GlobalStyle";
import mainTheme from "../../mainTheme";
import { store } from "../../redux/store";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show a level 1 heading with the text 'ROBOTS", () => {
      const expectedText = "ROBOTS";
      render(
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <Header />
          </ThemeProvider>
        </Provider>
      );

      const robotsHeader = screen.queryByRole("heading", {
        name: expectedText,
        level: 1,
      });

      expect(robotsHeader).toBeInTheDocument();
    });
  });
});
