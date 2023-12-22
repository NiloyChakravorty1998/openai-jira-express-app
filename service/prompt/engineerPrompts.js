import { defRole, main, test } from "../open-ai/openAIRequests.js"

async function engineerPrompt(storyInfo)
{
    //ENFORCE ROLE TO THE ENGINE 
    const role = `Hi, I want you to act ${storyInfo.role}`
    //GIVING ROLE AS A PROMPT
    const acknowledge = await defRole(role);
    //FEED SAMPLE RESPONSE (RESPONSE SHOULD BE DETAILED)
    const response = await test();
    //IF ACKNOWLEDGED, FEED THE OTHER SET OF INFO TO GET OUTPUT
    if(acknowledge && response)
    {
        const prompt = storyInfo.description;
        const response = await main(prompt);
        if(response)
        {
            return response;
        }
    }
}

export default engineerPrompt;