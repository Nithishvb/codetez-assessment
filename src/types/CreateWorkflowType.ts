import { NodesFieldType } from "../Components/EditWorkflow/EditWorkflow";

export type createWorkflowTypes = {
    id: string;
    workflowName: string;
};

export type updateWorkflowItemTyps = {
    nodes: NodesFieldType[];
    workflowId?: string;    
}