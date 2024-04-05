const WorkflowItem = require('../models/WorkflowItemModel');
const Workflow = require('../models/WorkflowMode');

const workflows = async (req, res) => {
    try{
        const response = await Workflow.findAll();
        return res.status(200).json({"message": "Data Fetched Successfully", data: response});
    }catch(err){
        return res.json({error: err})
    }
};

const createWorkflow = async (req, res) => {
    try{
        let { id , workflowName } = req.body;
        await Workflow.create({
            id: id,
            name: workflowName
        });
        return res.status(200).json({"message": "Workflow Created Successfully"});
    }catch(err){
        return res.json({error: err})
    }
};

const updateWorkflow = async (req, res) => {
    try{
        const deleteWorkflow = await WorkflowItem.destroy({
            where: { workflowid: req.body.workflowId }
        });
        let data = [];
        req.body.nodes.forEach((e) => {
            data.push({
                name: e.name,
                pointer: e.pointer,
                workflowid: req.body.workflowId
            })
        })
        const bulkInsertItems = await WorkflowItem.bulkCreate(data);
        return res.status(200).json({"message": "Workflow Item has been updated", data: bulkInsertItems})
    }catch(err){
        return res.json({error: err})
    }
};

const deleteWorkflow = async (req, res) => {
    try{
        const deleteWorkflow = await Workflow.destroy(
            { where: { id: req.query.id } }
        );
        const response = await Workflow.findAll();
        return res.status(200).json({"message": "Workflow Deleted Successfully", data: response});
    }catch(err){
        return res.json({error: err})
    }
};

const workflowById = async (req, res) => {
    try{
        const getWorkflowById = await WorkflowItem.findAll(
            { where: { workflowid: req.query.workflowId } }
        );
        return res.status(200).json({"message": "Data Fetched Successfullt", data: getWorkflowById});
    }catch(err){
        return res.json({error: err});
    }
};


module.exports = {
    workflows,
    createWorkflow,
    updateWorkflow,
    deleteWorkflow,
    workflowById
}