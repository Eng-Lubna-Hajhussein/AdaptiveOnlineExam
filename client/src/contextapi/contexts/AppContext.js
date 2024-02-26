import React, { createContext, useEffect, useReducer, useRef } from "react";
import { AppReducer } from "../reducers/AppReducer";

export const AppContext = createContext({ appState: {}, appDispatch: {} });

const AppContextProvider = (props) => {
  const [appState, appDispatch] = useReducer(AppReducer, {
    userInfo: {},lang:"en",dir:"ltr"
  },
  () => {
    const localData = localStorage.getItem("AppState");
    return localData ? JSON.parse(localData) : {
      userInfo: {},lang:"en",dir:"ltr"
    };
  }
  );
  useEffect(() => {
   localStorage.setItem("AppState",JSON.stringify(appState));
  }, [appState]);
  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
