import jiraRequest from "./jiraAPIRequest.js";

async function jiraService(req, res, next) {
    const issue = req.body.issueKey;
    // CALLING jiraRequest (issue)
    const data = await jiraRequest(issue);
    if (data) {
        // EXTRACT DATA
        const issueKey = data.key; // Issue Key (e.g., "EJOA-2")
        const summary = data.fields.summary; // Summary (e.g., "Open firewall requests")
        const description = data.fields.description.content[1].content[0].text; // Description (e.g., "I need to open firewall requests for VCLP001144 to SF prod uri.")
        const role = data.fields.description.content[0].content[0].text; // Text "As a developer"
        const response = {
            issueKey,
            summary,
            role,
            description,
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

export default jiraService;
