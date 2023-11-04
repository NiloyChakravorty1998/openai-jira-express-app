import express from 'express'
import jiraService from '../service/jira/jiraService.js';

//DECLARE ROUTER TO HANDLE ALL jira ROUTES
const jiraRouter = express.Router();

jiraRouter.get('/', jiraService);

export default jiraRouter;