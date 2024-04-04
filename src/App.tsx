import React, { useState } from 'react';
import './App.css';
import CreateWorkflows from './Components/CreateWorkflows/CreateWorkflows';
import WorkflowTable from './Components/Workfllows/WorkflowTable';

function App() {

  const [items, setItems] = useState<Array<string>>([]);

  return (
    <div className="py-4">
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold">Workflow Management System</h1>
      </div>
      <WorkflowTable />
    </div>
  );
}

export default App;
