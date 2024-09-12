/* eslint-disable no-case-declarations */
export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DENTISTS":
        return { ...state, dentistas: action.payload };
      case "SET_FAVS":
        return { ...state, favs: action.payload };
      case "TOGGLE_THEME":
        return { ...state, theme: action.payload };
    }
  };
  