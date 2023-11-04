async function integrationService (req,res,next) {
    //UNMARSHAL STORY ID FROM REQ
    const storyId = req.body.issueKey;
    console.log(`Starting integration service for ${storyId}`)
}

export default integrationService;