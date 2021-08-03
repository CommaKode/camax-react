const initState = {
  comeUpHandler: false
};
const comeUpReducer = (state = initState, action) => {
  switch (action.type) {
    case "open-comeUp":
      return {
        ...state,
        comeUpHandler: true,
      };
      case "close-comeUp":
      return {
        ...state,
        comeUpHandler: false,
      };

    default:
      return state;
  }
  return state;
};
export default comeUpReducer;
