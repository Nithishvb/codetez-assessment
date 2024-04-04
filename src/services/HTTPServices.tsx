import axios from "axios";
import { createWorkflowTypes } from "../types/CreateWorkflowType";
import { endpoints } from "./endpoints";

export const HTTPServices = {
  createWorkflow: ({ id, workflowName }: createWorkflowTypes) => {
    return axios.post(endpoints.CREATE_WORKFLOW(), {
      id: id,
      workflowName: workflowName,
    });
  },
};
