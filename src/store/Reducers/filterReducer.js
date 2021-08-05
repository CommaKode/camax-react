import {produce} from 'immer';

const initState = {
  filterList: [],
};
const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "sd":
      return { ...state, filterList:[...state.filterList, action.type] };

    case "intercommunicate":
      return { ...state, filterList:[...state.filterList, action.type] };

    case "handyPhone":
      return { ...state, filterList:[...state.filterList, action.type] };

    case "parkingOpener":
      return { ...state, filterList:[...state.filterList, action.type] };

    case "touch":
      return { ...state, filterList:[...state.filterList, action.type] };

    case "cart":
      return { ...state, filterList:[...state.filterList, action.type] };

    case "mobileConnect":
      return { ...state, filterList:[...state.filterList, action.type] };

    case "camera":
      return { ...state, filterList:[...state.filterList, action.type] };

    case "twoPanelConnect":
      return { ...state, filterList:[...state.filterList, action.type] };

    case "guard":
      return { ...state, filterList:[...state.filterList, action.type] };

    case "image":
      return { ...state, filterList:[...state.filterList, action.type] };

    default:
      return state;
  }
  return state;
};
export default filterReducer;
