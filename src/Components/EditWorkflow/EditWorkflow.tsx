import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/Context";
import { useNavigate, useParams } from "react-router-dom";

type NodesFieldType = {
  id: number;
  nodeName: string;
  nodePointer: string;
};

const NODES_DATA: NodesFieldType[] = [
  {
    id: 1,
    nodeName: "Start",
    nodePointer: "0",
  },
];

const EditWorkflow = () => {
  const { id } = useParams();
  const { state , dispatch } = useContext(AppContext);
  const [nodes, setNodes] = useState<NodesFieldType[]>(state.workflow.nodes);
  const navigate = useNavigate();

  const addNewItem = () => {
    const newField: NodesFieldType = { nodeName: "", nodePointer: "" , id: nodes.length+1 };
    setNodes([...nodes, newField]);
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedFields = [...nodes];
    updatedFields[index].nodeName = value;
    setNodes(updatedFields);
  };

  const handleSelectChange = (index: number, value: string) => {
    let findPointerId = nodes.filter((e) => e.nodeName === value)[0].id;
    const updatedFields = [...nodes];
    updatedFields[index].nodePointer = JSON.stringify(findPointerId);
    setNodes(updatedFields);
  };

  const updateWorkflow = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        node: nodes
      }
    })
    console.log(nodes);
    navigate(`/listworkflow/${id}`);
  };

  const deleteItem = (e: any,index: number) => {
    let removeNode = state.workflow.nodes.filter((e) => e.id !== index);
    e.preventDefault();
    dispatch({
      type: 'DELETE_ITEM',
      payload: {
        nodes: removeNode
      }
    })
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
                value={val.nodeName}
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
                value={val.nodePointer}
                onChange={(e) => handleSelectChange(index, e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select Option</option>
                {nodes.map(
                  (optionField, optionIndex) =>
                    index !== optionIndex && (
                      <option className="flex">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value={JSON.stringify(optionField.id)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        {optionField.nodeName}
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
