import { determineNeededSkills } from "../pages/Results";

const SURVEY_EXTRACT = {
  questions: {
    1: {
      question:
        "Avez-vous déjà des maquettes pour l'application que vous voulez créer ?",
      associatedSkills: ["UI design", "UX design"],
    },

    3: {
      question:
        "Votre site doit-il sauvegarder des données entrées par vos utilisateurs ?",
      associatedSkills: ["back-end"],
    },

    4: {
      question:
        "Souhaitez-vous avoir plusieurs types de comptes pour votre application (administrateur, visiteur, utilisateur, etc). ?",
      associatedSkills: ["front-end", "back-end"],
    },

    6: {
      question:
        "Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?",
      associatedSkills: ["expertise SEO"],
    },
  },

  jobs: {
    "UI design":
      "Le designer UI prend en charge les maquettes et graphismes du site.",
    "UX design":
      "Le designer UX veille à l'ergonomie et au confort d'utilisation du site.",
    "back-end":
      "Le développeur back-end se charge de la partie émergée du site, côté serveur, comme l'interaction avec une base de données.",
    "expertise SEO":
      "L'expert SEO améliore la visibilité du site par un bon positionnement dans les résultats des moteurs de rercherche.",
  },
};

describe("GIVEN user ansmers to the survey", () => {
  describe("WHEN all answers are 'No' (false)", () => {
    test("THEN there is no skill to recommand", () => {
      const userAnswers = { 1: false, 3: false, 4: false, 6: false };
      const expectedSkills = [];

      expect(determineNeededSkills(SURVEY_EXTRACT, userAnswers)).toEqual(
        expectedSkills
      );
    });
  });

  describe("WHEN only one answer is 'Yes' (true)", () => {
    test("THEN the associated jobs must be recommanded", () => {
      let userAnswers = { 1: false, 3: false, 4: false, 6: true };
      let expectedSkills = ["expertise SEO"];

      expect(determineNeededSkills(SURVEY_EXTRACT, userAnswers)).toEqual(
        expectedSkills
      );

      userAnswers = { 1: true, 3: false, 4: false, 6: false };
      expectedSkills = ["UI design", "UX design"];

      expect(determineNeededSkills(SURVEY_EXTRACT, userAnswers)).toEqual(
        expectedSkills
      );
    });
  });

  describe("WHEN all answers are 'Yes' (true)", () => {
    test("THEN all associated jobs must be recommanded without duplicate", () => {
      const userAnswers = { 1: true, 3: true, 4: true, 6: true };
      const expectedSkills = [
        "UI design",
        "UX design",
        "back-end",
        "front-end",
        "expertise SEO",
      ];

      expect(determineNeededSkills(SURVEY_EXTRACT, userAnswers)).toEqual(
        expectedSkills
      );
    });
  });
});
