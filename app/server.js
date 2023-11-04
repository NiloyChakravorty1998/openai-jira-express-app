import express from 'express'
import dotenv from 'dotenv'
import promptRouter from '../router/promptRouter.js';
import jiraRouter from '../router/jiraRouter.js';
import integrationRouter from '../router/integrationRouter.js';
//dotenv CONFIG
//DECLARE SERVER_PORT, APP_BASE_URI {OPEN AI}, OPEN_AI_KEY, JIRA_API_URI, JIRA_API_KEY,JIRA_USER_NAME
dotenv.config();

//CREATE APP INSTANCE
const app = express();
const port = process.env.SERVER_PORT || 3000;

//MIDDLEWARE 
app.use(express.json());
app.use('/api/prompt', promptRouter);
app.use('/api/jira',jiraRouter);
app.use('/api/auto',integrationRouter);
//START SERVER
app.listen(port, () => {
    console.log(`Application started on http://localhost:${port}`);
});
 