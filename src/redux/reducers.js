import { initialState } from "./store";

const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "toggleDarkMode":
      return !state;
    case "resetApp":
      return false;
    default:
      return state;
  }
};

const tagsReducer = (state, action) => {
  switch (action.type) {
    case "addTag":
      return [...state, action.payload];
    case "resetApp":
      return initialState.tags;
    default:
      return state;
  }
};

export const reducer = (state, action) => {
  return {
    darkMode: darkModeReducer(state.darkMode, action),
    tags: tagsReducer(state.tags, action),
  };
};
