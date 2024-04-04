import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListWorkflows from './Components/ListWorkflows/ListWorkflows';
import EditWorkflow from './Components/EditWorkflow/EditWorkflow';
import CreateWorkflows from './Components/CreateWorkflows/CreateWorkflows';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/createWorkflow",
    element: <CreateWorkflows />,
  },
  {
    path: "/listworkflow",
    element: <ListWorkflows />,
  },
  {
    path: '/editworkflow',
    element: <EditWorkflow />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
