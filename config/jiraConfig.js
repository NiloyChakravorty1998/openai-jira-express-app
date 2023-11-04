import dotenv from 'dotenv';

dotenv.config();
const apiKey = process.env.JIRA_API_KEY;
const baseURI = process.env.JIRA_API_URI;
const userName = process.env.JIRA_USER_NAME;

const jiraConfig = {
    apiKey,
    baseURI,
    userName
}

export default jiraConfig;