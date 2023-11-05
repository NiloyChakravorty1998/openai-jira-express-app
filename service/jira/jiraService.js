import jiraRequest from "./jiraAPIRequest.js";

async function jiraService(req, res, next) {
    const issue = req.body.issueKey;
    // CALLING jiraRequest (issue)
    const data = await jiraRequest(issue);
    if (data) {
        // EXTRACT DATA
        const issueKey = data.key; // Issue Key (e.g., "EJOA-2")
        const summary = data.fields.summary; // Summary (e.g., "Open firewall requests")        
        //GET THE ROLE
        const role = data.fields.description.content[0].content[0].text; // Text "As a developer"
        //GET DESCRIPTION
        const entireContent =data.fields.description.content;
        const entireDesc = concatenateDescriptionContent(entireContent);
        console.log(entireDesc);
        const response = {
            issueKey,
            summary,
            role,
            description : entireDesc
        };

        res.status(200).json({
            message: `Data fetched for issue ${issue}`,
            issueSummary: response
        });
    } else {
        res.status(200).json({
            message: `No data found for issue ${issue}`
        });
    }
}
function concatenateDescriptionContent(content) {
    let result = '';
    for (const item of content) {
      if (item.type === 'text') {
        result += item.text;
      } else if (item.type === 'paragraph') {
        result += concatenateDescriptionContent(item.content);
      }
    }
    return result;
  }

export default jiraService;
