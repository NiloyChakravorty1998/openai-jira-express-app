import openai from "../../config/openAIconfig.js";

async function main (prompt) {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": prompt.role, "content": prompt.content}],
      });
      return chatCompletion.choices[0].message;
}
export default main;