import { fireEvent, render, screen } from "@testing-library/react";

import { Card } from "../components/Card";
import { ThemeProvider } from "../utils/context/providers";
import DefaultProfile from "../assets/profile.png";

function renderUI(ui) {
  const uiWrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

  render(ui, { wrapper: uiWrapper });
}

describe("GIVEN a name, a jobTitle and a picture to ca Card component", () => {
  beforeEach(() => {
    renderUI(
      <Card name="John Doe" jobTitle="Designer UI" picture={DefaultProfile} />
    );
  });

  describe("WHEN Card is called for rendering", () => {
    test("THEN the name, jobTitle and picture are visible", () => {
      const cardName = screen.getByRole("heading", { level: 3 });
      const cardJobTitle = screen.getByRole("heading", { level: 2 });
      const cardPicture = screen.getByAltText(/Portrait de/);

      expect(cardName.textContent).toBe("John Doe");
      expect(cardJobTitle.textContent).toBe("Designer UI");
      expect(cardPicture).toBeTruthy();
    });

    test("THEN the CardStar icon on the Card is grayscaled", () => {
      const cardStar = screen.getByTestId("star-icon-JohnDoe");
      const cardStarStyle = window.getComputedStyle(cardStar);

      expect(cardStarStyle.filter).toBe("grayscale(1)");
    });
  });

  describe("WHEN CardStar icon is clicked", () => {
    test("THEN the CardStar is no more grayscaled", () => {
      const cardStar = screen.getByTestId("star-icon-JohnDoe");
      fireEvent.click(cardStar);
      const cardStarStyle = window.getComputedStyle(cardStar);

      expect(cardStarStyle.filter).toBe("grayscale(0)");
    });
  });
});
