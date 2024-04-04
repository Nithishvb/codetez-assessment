const WorkflowItem = require('../models/WorkflowItemModel');
const Workflow = require('../models/WorkflowMode');

const workflows = async (req, res) => {
    const response = await Workflow.findAll();
    console.log(response);
    return res.status(200).json({"message": "Hello world from controller"})
};

const createWorkflow = async (req, res) => {
    const createWorkflow = await Workflow.create({
        name: req.body.WorkflowName
    });
    console.log(createWorkflow);
    return res.status(200).json({"message": "Hello world from controller"})
};

const updateWorkflow = (req, res) => {
    const updateWorkflow = WorkflowItem.update(
        { title: req.body.WorkflowName },
        { where: { id: req.body.id } }
    );
    console.log(updateWorkflow);
    return res.status(200).json({"message": "Hello world from controller"})
};

const deleteWorkflow = (req, res) => {
    const updateWorkflow = WorkflowItem.destroy(
        { where: { id: req.body.id } }
    );
    console.log(updateWorkflow);
    return res.status(200).json({"message": "Hello world from controller"})
};

module.exports = {
    workflows,
    createWorkflow,
    updateWorkflow,
    deleteWorkflow
}