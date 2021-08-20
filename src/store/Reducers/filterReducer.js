const initState = {
  sd: false,
  intercommunicate:false,
  handyPhone: false,
  parkingOpener:false,
  touch: false,
  cart: false,
  mobileConnect: false,
  camera: false,
  twoPanelConnect:false,
  guard: false,
  extraLock: false
};
const popUpReducer = (state = initState, action) => {
  switch (action.type) {
    case "sdHandle":
      return {
        ...state,
        sd:!state.sd,
      };
    case "intercommunicateHandle":
      return {
        ...state,
        intercommunicate:!state.intercommunicate,
      };
    case "handyPhoneHandle":
      return {
        ...state,
        handyPhone:!state.handyPhone,
      };
    case "parkingOpenerHandle":
      return {
        ...state,
        parkingOpener:!state.parkingOpener,
      };
    case "touchHanlde":
      return {
        ...state,
        touch:!state.touch,
      };
    case "cartHandle":
      return {
        ...state,
        cart:!state.cart ,
      };
    case "mobileConnectHandle":
      return {
        ...state,
        mobileConnect:!state.mobileConnect,
      };
    case "twoPanelConnectHandle":
      return {
        ...state,
        twoPanelConnect:!state.twoPanelConnect,
      };
    case "guardHandle":
      return {
        ...state,
        guard:!state.guard,
      };
    case "extraLockHandle":
      return {
        ...state,
        extraLock: !state.extraLock,
      };

    default:
  }
  return state;
};
export default popUpReducer;
