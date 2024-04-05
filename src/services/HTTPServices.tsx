import axios from "axios";
import { createWorkflowTypes, updateWorkflowItemTyps } from "../types/CreateWorkflowType";
import { endpoints } from "./endpoints";

export const HTTPServices = {
  createWorkflow: ({ id, workflowName }: createWorkflowTypes) => {
    return axios.post(endpoints.CREATE_WORKFLOW(), {
      id: id,
      workflowName: workflowName,
    });
  },
  updateWorkflowItem: ({ nodes , workflowId }: updateWorkflowItemTyps) => {
    return axios.put(endpoints.UPDATE_WORKFLOW(), {
      nodes: nodes,
      workflowId: workflowId
    });
  },
  deleteWorkflow: (id: string) => {
    return axios.delete(endpoints.DELETE_WORKFLOW(id));
  },
};
