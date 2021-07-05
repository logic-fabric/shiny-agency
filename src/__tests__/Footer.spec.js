import { fireEvent, render, screen } from "@testing-library/react";

import Footer from "../components/Footer";
import { ThemeProvider } from "../utils/context/providers";

describe("GIVEN the Footer component", () => {
  describe("WHEN Footer is called for rendering", () => {
    test("THEN it renders without crash", () => {
      render(
        <ThemeProvider>
          <Footer />
        </ThemeProvider>
      );
    });

    test("THEN there is a button proposing dark mode", () => {
      render(
        <ThemeProvider>
          <Footer />
        </ThemeProvider>
      );

      const modeButton = screen.getByRole("button");

      expect(modeButton.textContent).toBe("Passer en mode sombre");
    });
  });

  describe("WHEN dark mode button is clicked", () => {
    test("THEN the message of the button toggles", () => {
      render(
        <ThemeProvider>
          <Footer />
        </ThemeProvider>
      );

      const modeButton = screen.getByRole("button");
      fireEvent.click(modeButton);

      expect(modeButton.textContent).toBe("Passer en mode clair");
    });
  });
});
