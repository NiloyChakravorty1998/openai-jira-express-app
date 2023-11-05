import jiraRequest from "../service/jira/jiraAPIRequest.js";
import { concatenateDescriptionContent } from "../service/jira/jiraService.js";

async function getStoryInfo(issue) {
    //FETCH STORY INFO FROM JIRA
    const storyInfo = await jiraRequest(issue);
    if (storyInfo) {
        // EXTRACT DATA
        const issueKey = storyInfo.key; // Issue Key (e.g., "EJOA-2")
        const summary = storyInfo.fields.summary; // Summary (e.g., "Open firewall requests")
        const role = storyInfo.fields.description.content[0].content[0].text; // Text "As a developer"
        //GET DESCRIPTION
        const description = concatenateDescriptionContent(storyInfo.fields.description.content);
        
        const response = {
            issueKey,
            summary,
            role,
            description,
        };
    return response;    
 }
}

export default getStoryInfo;