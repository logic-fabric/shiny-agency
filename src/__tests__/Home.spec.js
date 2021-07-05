import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";

import Home from "../pages/Home";
import { ThemeProvider } from "../utils/context/providers";

describe("GIVEN the Home page component", () => {
  describe("WHEN Home is called for rendering", () => {
    test("THEN it renders without crash", () => {
      render(
        <MemoryRouter>
          <ThemeProvider>
            <Home />
          </ThemeProvider>
        </MemoryRouter>
      );
    });

    test("THEN there is the main headline", () => {
      render(
        <MemoryRouter>
          <ThemeProvider>
            <Home />
          </ThemeProvider>
        </MemoryRouter>
      );

      const mainHeadline = screen.getByRole("heading", { level: 1 });

      expect(mainHeadline.textContent).toBe(
        "Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents"
      );
    });
  });
});
