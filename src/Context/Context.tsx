import React, { createContext, useReducer } from "react";
import { workflowReducer } from "../Reducer/Reducer";

type NodesType = {
  id: number;
  nodeName: string;
  nodePointer: string;
};

type ProductType = {
  id: number;
  name: string;
  nodes: NodesType[];
};

export type InitialStateType = {
  workflow: ProductType;
};

const initialState: InitialStateType = {
  workflow: {
    id: 0,
    name: "",
    nodes: [
      {
        id: 1,
        nodeName: "",
        nodePointer: "",
      },
    ],
  },
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  state: InitialStateType,
  action: any
): InitialStateType => ({
  ...state,
  workflow: workflowReducer(state, action),
});

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
