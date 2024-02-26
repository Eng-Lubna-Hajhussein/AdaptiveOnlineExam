export const AppReducer = (state, action) => {
    switch (action.type) {
      case "GET_USERINFO":
        return {...state, userInfo:action.userInfo};
        case "CHANGE_LANGUAGE":
          return {...state, lang:action.lang,dir:action.lang==="ar"?"rtl":"ltr"};
          case "LOGOUT":
          return {...state, userInfo: {},lang:"en",dir:"ltr"};
      default:
        return state;
    }
  };
  