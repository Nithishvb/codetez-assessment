import React, { useEffect, useState } from "react";
import "./App.css";
import CreateWorkflows from "./Components/CreateWorkflows/CreateWorkflows";
import WorkflowTable from "./Components/Workfllows/WorkflowTable";
import useFetch from "./Hooks/useFetchHook";
import { endpoints } from "./services/endpoints";
import { HTTPServices } from "./services/HTTPServices";

function App() {
  const [items, setItems] = useState<any>([]);
  const { data } = useFetch(endpoints.WORKFLOW());

  useEffect(() => {
    if (data) {
      setItems(data.data);
    }
  }, [data]);

  const deleteWorkflow = async (id: string) => {
    const deleteWorkflow = await HTTPServices.deleteWorkflow(id);
    setItems(deleteWorkflow.data?.data);
  };

  return (
    <div className="py-4">
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold">Workflow Management System</h1>
      </div>
      <WorkflowTable workflow={items} deleteWorkflow={deleteWorkflow} />
    </div>
  );
}

export default App;
