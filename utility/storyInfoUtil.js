import jiraRequest from "../service/jira/jiraAPIRequest.js";

async function getStoryInfo(issue) {
    //FETCH STORY INFO FROM JIRA
    const storyInfo = await jiraRequest(issue);
    if (storyInfo) {
        // EXTRACT DATA
        const issueKey = storyInfo.key; // Issue Key (e.g., "EJOA-2")
        const summary = storyInfo.fields.summary; // Summary (e.g., "Open firewall requests")
        const role = storyInfo.fields.description.content[0].content[0].text; // Text "As a developer"
        const description = storyInfo.fields.description.content[1].content[0].text; // Description (e.g., "I need to open firewall requests for VCLP001144 to SF prod uri.")
    
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