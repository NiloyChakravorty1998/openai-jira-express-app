import base64 from 'base-64';
import axios from "axios";
import jiraConfig from "../../config/jiraConfig.js";

async function jiraRequest(issue) {
    // ENCODING TO Base64
    const authHeader = `Basic ${base64.encode(`${jiraConfig.userName}:${jiraConfig.apiKey}`)}`;
    // AXIOS CONFIG
    const axiosConfig = {
        headers: {
            Authorization: authHeader
        }
    };
    try {
        const response = await axios.get(`${jiraConfig.baseURI}/${issue}`, axiosConfig);
        if (response.status === 200) {
            const issueData = response.data;
            // RETURN ISSUEDATA
            return issueData;
        } else {
            console.log('Failed to retrieve the issue. Status code:', response.status);
        }
    } catch (error) {
        console.error('An error occurred:', error);
        throw error; // Rethrow the error
    }
}

export default jiraRequest;
