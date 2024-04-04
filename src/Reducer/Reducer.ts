export const workflowReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_WORKFLOW":
      return {
        id: action.payload.id,
        name: action.payload.name,
        nodes: action.payload.nodes,
      };
    case "REMOVE_WORKFLOW":
      return {};
    case "ADD_ITEM":
      return {
        id: state.workflow.id,
        name: state.workflow.name,
        nodes: action.payload.node,
      };
    case "DELETE_ITEM":
      return {
        id: state.workflow.id,
        name: state.workflow.name,
        nodes: action.payload.nodes,
      };
    default:
      return state;
  }
};
