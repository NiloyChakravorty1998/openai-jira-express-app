import openai from "../../config/openAIconfig.js";
import { sampleExtract, sampleResponse } from "../../utility/contextData.js";

async function main (prompt) {
  try{
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages : [
          {"role" : "user", "content" : prompt}
        ],
        max_tokens: 4000,
        temperature: 0.3
      });
      return chatCompletion.choices[0].message;
    }
    catch(err)
    {
      console.log(err);
    }
}

async function defRole (role) {
  try{
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages : [
          {"role" : "system", "content" : role},
        ],
        max_tokens: 4000,
        temperature: 0.8
      });

      return chatCompletion.choices[0].message;
    }
    catch(err)
    {
      console.log(err);
    }
}

// ESTABLISH MODEL 
async function test() {
  const completion = await openai.chat.completions.create({
    messages: [
      {"role" : "user", "content" : sampleExtract },
      {"role": "assistant", "content" : sampleResponse}
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message;
}
export {main, defRole, test};