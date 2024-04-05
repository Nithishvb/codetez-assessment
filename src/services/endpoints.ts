const BASE_URL = 'http://localhost:5000/api';

export const endpoints = {
    CREATE_WORKFLOW: () => `${BASE_URL}/createWorkflow`,
    UPDATE_WORKFLOW: () => `${BASE_URL}/updateWorkflow`,
    WORKFLOW_ITEMS: (workflowId: string) => `${BASE_URL}/workflowById?workflowId=${workflowId}`,
    WORKFLOW: () => `${BASE_URL}/workflows`,
    DELETE_WORKFLOW: (id: string) => `${BASE_URL}/deleteWorkflow?id=${id}`,
}