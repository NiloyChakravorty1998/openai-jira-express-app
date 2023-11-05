import main from "../open-ai/openAIRequests.js"

async function engineerPrompt(storyInfo)
{
    //ENFORCE ROLE TO THE ENGINE
    const role = `Hi, I want you to act ${storyInfo.role}`
    //GIVING ROLE AS A PROMPT
    const acknowledge = await main(role);
    //IF acknowledge, FEED THE OTHER SET OF INFO TO GET OUTPUT
    if(acknowledge)
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