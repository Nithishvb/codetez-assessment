import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { HTTPServices } from "../../services/HTTPServices";
import { endpoints } from "../../services/endpoints";
import useFetch from "../../Hooks/useFetchHook";

export type NodesFieldType = {
  id: number;
  name: string;
  pointer: string;
};

const EditWorkflow = () => {
  const { id } = useParams();
  const { data } = useFetch(endpoints.WORKFLOW_ITEMS(id || ''));
  const [nodes, setNodes] = useState<NodesFieldType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(data){
      setNodes(data?.data);
    }
  }, [data])

  const addNewItem = () => {
    const newField: NodesFieldType = { name: "", pointer: "" , id: nodes.length+1 };
    setNodes([...nodes, newField]);
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedFields = [...nodes];
    updatedFields[index].name = value;
    setNodes(updatedFields);
  };

  const handleSelectChange = (index: number, value: string) => {
    const findIndex = nodes.findIndex((e) => e.id == parseInt(value));
    const updatedFields = [...nodes];
    updatedFields[index].pointer = value;
    setNodes(updatedFields);
  };

  const updateWorkflow = async () => {
    const response = await HTTPServices.updateWorkflowItem({
     workflowId: id,
     nodes: nodes
    });
    navigate(`/listworkflow/${id}`);
  };

  const deleteItem = (e: any,index: number) => {
    e.preventDefault();
    let removeNode = nodes.filter((e,i) => e.id !== index);
    setNodes(removeNode);
  };

  return (
    <div>
      <div className="flex justify-center flex-col items-center py-10">
        {nodes.map((val: NodesFieldType, index: number) => (
          <form
            className="max-w-sm mx-auto w-full border border-1 border-gray-300 p-6 mb-4"
            key={index}
          >
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Item Name
              </label>
              <input
                type="text"
                value={val.name}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the item name"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Choose Connection
              </label>
              <select
                id="countries"
                value={val.pointer}
                onChange={(e) => handleSelectChange(index, e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select Option</option>
                {nodes.map(
                  (optionField, optionIndex) =>
                    index !== optionIndex && (
                      <option className="flex" key={optionIndex} value={JSON.stringify(optionField.id)}>
                        {optionField.name}
                      </option>
                    )
                )}
              </select>
            </div>
            <div>
              <button onClick={(e) => deleteItem(e,val.id)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
            </div>
          </form>
        ))}
      </div>
      <div className="text-center pb-4">
        <button
          onClick={addNewItem}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add New Item
        </button>
      </div>
      <div className="text-center pb-4">
        <button
          type="submit"
          onClick={updateWorkflow}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditWorkflow;
