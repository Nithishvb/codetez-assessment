const workflows = (req, res) => {
    return res.status(200).json({"message": "Hello world from controller"})
};

const createWorkflow = (req, res) => {
    return res.status(200).json({"message": "Hello world from controller"})
};

const updateWorkflow = (req, res) => {
    return res.status(200).json({"message": "Hello world from controller"})
};

const deleteWorkflow = (req, res) => {
    return res.status(200).json({"message": "Hello world from controller"})
};

module.exports = {
    workflows,
    createWorkflow,
    updateWorkflow,
    deleteWorkflow
}