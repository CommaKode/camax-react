const initState = {
  filterList: [],
};
const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "sd":
      {
        state.filterList.push("sd");
      }
      break;
    case "intercommunicate":
      {
        state.filterList.push("intercommunicate");
      }
      break;

    case "handyPhone":
      state.filterList.push("handyPhone");
      break;
    case "parkingOpener":
      state.filterList.push("parkingOpener");
      break;
    case "touch":
      {
        state.filterList.push("touch");
      }
      break;
    case "cart":
      {
        state.filterList.push("cart");
      }
      break;
    case "mobileConnect":
      {
        state.filterList.push("sd");
      }
      break;
    case "camera":
      {
        state.filterList.push("mobileConnect");
      }
      break;
    case "twoPanelConnect":
      {
        state.filterList.push("twoPanelConnect");
      }
      break;
    case "guard":
      {
        state.filterList.push("guard");
      }
      break;
    case "image":
      {
        state.filterList.push("image");
      }
      break;
    default:
      return state;
  }
  return state;
};
export default filterReducer;
