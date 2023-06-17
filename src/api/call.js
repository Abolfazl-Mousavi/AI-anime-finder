import { Configuration, OpenAIApi } from "openai";

async function call() {
  const apiKey = localStorage.getItem("sk");
  if (apiKey == undefined || apiKey == null) {
    return;
  }
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "write YES",
    max_tokens: 7,
    temperature: 0.7,
  });

  if (response.data.choices[0].text.toLocaleLowerCase() === "\n\nyes") {
    return true;
  }
  return false;
}

export default call;
