import openai from "../../config/openAIconfig.js";

async function main (prompt) {
  try{
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": prompt.role ? prompt.role : `assistant`, "content": prompt.content ? prompt.content : prompt}],
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
export default main;