const express = require('express');
const workflowcontroller = require('./controllers/workflow.controller');

const router = express.Router();

router.get('/workflows', workflowcontroller.workflows);
router.post('/createWorkflow', workflowcontroller.createWorkflow);
router.put('/updateWorkflow', workflowcontroller.createWorkflow);
router.delete('/deleteWorkflow', workflowcontroller.createWorkflow);

module.exports = router;