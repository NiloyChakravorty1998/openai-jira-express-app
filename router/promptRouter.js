import express from 'express'
import promptService from '../service/prompt/promptService.js';

//DECLARE ROUTER TO HANDLE ALL PROMPT ROUTES
const promptRouter = express.Router();

promptRouter.get('/', promptService);

export default promptRouter;