import { fireEvent, render, screen } from "@testing-library/react";

import Card from "../components/Card";
import { ThemeProvider } from "../utils/context/providers";
import DefaultProfile from "../assets/profile.png";

describe("GIVEN a name, a jobTitle and a picture to ca Card component", () => {
  describe("WHEN Card is called for rendering", () => {
    test("THEN the name, jobTitle and picture are visible", () => {
      render(
        <ThemeProvider>
          <Card
            name="John Doe"
            jobTitle="Designer UI"
            picture={DefaultProfile}
          />
        </ThemeProvider>
      );

      const cardName = screen.getByRole("heading", { level: 3 });
      const cardJobTitle = screen.getByRole("heading", { level: 2 });
      const cardPicture = screen.getByAltText(/Portrait de/);

      expect(cardName.textContent).toBe("John Doe");
      expect(cardJobTitle.textContent).toBe("Designer UI");
      expect(cardPicture).toBeTruthy();
    });

    test("THEN the star on the Card is invisible", () => {
      render(
        <ThemeProvider>
          <Card
            name="John Doe"
            jobTitle="Designer UI"
            picture={DefaultProfile}
          />
        </ThemeProvider>
      );

      const cardStar = screen.getByTestId("star-icon-JohnDoe");
      const cardStarStyle = window.getComputedStyle(cardStar);

      expect(cardStarStyle.opacity).toBe("0");
    });
  });

  describe("WHEN Card is clicked", () => {
    test("THEN the star on the Card is visible", () => {
      render(
        <ThemeProvider>
          <Card
            name="John Doe"
            jobTitle="Designer UI"
            picture={DefaultProfile}
          />
        </ThemeProvider>
      );

      const card = screen.getByTestId("card-JohnDoe");
      fireEvent.click(card);

      const cardStar = screen.getByTestId("star-icon-JohnDoe");
      const cardStarStyle = window.getComputedStyle(cardStar);

      expect(cardStarStyle.opacity).toBe("1");
    });
  });
});
