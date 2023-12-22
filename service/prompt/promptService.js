import {main} from "../open-ai/openAIRequests.js";

async function promptService (req,res,next)
{
    //UNMARSHAL REQUEST AND FORM AN OBJECT - PROMPT
    const content = req.body.prompt;
    const prompt = {
        content
    }
    //CALLING MAIN FUNCTION
    const response = await main(content);
    //SEND RESPONSE
    res.status(200).json(
        {
         prompt,
         response   
        }
    )
}

export default promptService;