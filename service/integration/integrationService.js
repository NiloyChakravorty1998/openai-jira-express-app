import getStoryInfo from '../../utility/storyInfoUtil.js'
import engineerPrompt from '../prompt/engineerPrompts.js';

async function integrationService (req,res,next) {
    //UNMARSHAL STORY ID FROM REQ
    const storyId = req.body.issueKey;
    
    //GET STORY DATA FROM JIRA
    const storyInfo = await getStoryInfo(storyId);

    //PROMPT ENGINEER
    const response = await engineerPrompt(storyInfo);
    if(response)
    {
        res.status(200).json({
            story : storyId,
            response
        })
    }
    else{
        res.status(500).json({
            story : storyId,
            response : `Something went wrong`
        })
    }
}

export default integrationService;