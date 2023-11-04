import express from 'express'
import dotenv from 'dotenv'
import promptRouter from './router/promptRouter.js';

//dotenv CONFIG
//DECLARE SERVER_PORT, APP_BASE_URI {OPEN AI}, OPEN_AI_KEY, JIRA_URI, JIRA_KEY
dotenv.config();

//CREATE APP INSTANCE
const app = express();
const port = process.env.SERVER_PORT || 3000;

//MIDDLEWARE 
app.use(express.json());
app.use('/api/prompt', promptRouter);
//START SERVER
app.listen(port, () => {
    console.log(`Application started on http://localhost:${port}`);
});
 