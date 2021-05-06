import { createContext, useContext } from "react";

interface State {
  isAuthenticated: boolean;
  theme: string;
}

interface Action {
  type: string;
}

interface ContextState {
  state: State;
  dispatch: Function;
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "change-theme":
      const theme = state.theme === "danger" ? "warning" : "danger";
      return { ...state, theme };
    case "login":
      return { ...state, isAuthenticated: true };
    case "logout":
      return { ...state, isAuthenticated: false };
    default:
      throw new Error(`Unkown action type: ${action.type}`);
  }
};

export const initialState: State = {
  isAuthenticated: false,
  theme: "danger",
};

export const ReducerContext = createContext<ContextState>({
  state: initialState,
  dispatch: (action: Action) => {},
});

export const useReduceContext = () => useContext(ReducerContext);
