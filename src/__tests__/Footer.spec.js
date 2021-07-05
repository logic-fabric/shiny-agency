import { fireEvent, render, screen } from "@testing-library/react";

import Footer from "../components/Footer";
import { ThemeProvider } from "../utils/context/providers";

describe("GIVEN the Footer component", () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
  });

  describe("WHEN Footer is called for rendering", () => {
    test("THEN there is a button proposing dark mode", () => {
      const modeButton = screen.getByRole("button");

      expect(modeButton.textContent).toBe("Passer en mode sombre");
    });
  });

  describe("WHEN dark mode button is clicked", () => {
    test("THEN the message of the button toggles", () => {
      const modeButton = screen.getByRole("button");
      fireEvent.click(modeButton);

      expect(modeButton.textContent).toBe("Passer en mode clair");
    });
  });
});
