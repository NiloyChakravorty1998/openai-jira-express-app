import express from 'express'
import integrationService from '../service/integration/integrationService.js';

//DECLARE ROUTER TO HANDLE ALL integration ROUTES
const integrationRouter = express.Router();

integrationRouter.get('/', integrationService);

export default integrationRouter;