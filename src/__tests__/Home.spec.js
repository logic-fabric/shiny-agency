import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";

import { Home } from "../pages/Home";
import { SurveyProvider, ThemeProvider } from "../utils/context/providers";

function renderUI(ui) {
  const uiWrapper = ({ children }) => (
    <MemoryRouter>
      <ThemeProvider>
        <SurveyProvider>{children}</SurveyProvider>
      </ThemeProvider>
    </MemoryRouter>
  );

  render(ui, { wrapper: uiWrapper });
}

describe("GIVEN the Home page component", () => {
  beforeEach(() => {
    renderUI(<Home />);
  });

  describe("WHEN Home is called for rendering", () => {
    test("THEN there is the main headline", () => {
      const mainHeadline = screen.getByRole("heading", { level: 1 });

      expect(mainHeadline.textContent).toBe(
        "Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents"
      );
    });
  });
});
