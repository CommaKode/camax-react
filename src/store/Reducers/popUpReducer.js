const initState = {
  filterPopUp: false,
  sortPopUp: false,
};
const popUpReducer = (state = initState, action) => {
  switch (action.type) {
    case "open-filterPopUp":
      return {
        ...state,
        filterPopUp: true,
      };
    case "close":
      return {
        ...state,
        filterPopUp: false,
        sortPopUp: false,
      };
    case "open-sortPopUp":
      return {
        ...state,
        sortPopUp: true,
      };

    default:
  }
  return state;
};
export default popUpReducer;
