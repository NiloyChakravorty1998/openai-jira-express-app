import openai from "../../config/openAIconfig.js";

async function main (prompt) {
  try{
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages : [
          {"role" : "system", "content" : prompt}
        ],
        max_tokens: 4000,
        temperature: 0.8
      });
      console.log(" main -> " +JSON.stringify(chatCompletion.choices[0].message));
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
          {"role" : "system", "content" : role}
        ],
        max_tokens: 4000,
        temperature: 0.8
      });
      console.log(" def -> " +JSON.stringify(chatCompletion.choices[0].message));

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
    messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message);
}
test();
export {main, defRole, test};