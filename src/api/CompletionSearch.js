import { Configuration, OpenAIApi } from "openai";

async function CompletionSearch(prompt) {
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
    prompt:
      "want you to act as someone who wached a lot of anime and has a lot of knoladge about anime. I will describe a anime and your task is to write the name of that anime.if the question is not from a anime dont answer.\n" +
      "here are some example questions:\n" +
      "q:A whimpy guy with a cell phone competes in a tournament to become God.\n" +
      "a:Mirai Nikki\n" +
      "q:God is saved from a traffic accident by a girl and uses it to his advantage.\n" +
      "a:Noragami\n" +
      "q:People fight using the spirits of other people in the most confusing universe in all of anime.\n" +
      "a:Fate\n" +
      "Now tell me what is the name of this anime:\n" +
      prompt +
      "\njust answer the anime name.dont add anything else.",
    max_tokens: 700,
    temperature: 0.7,
  });

  return response.data.choices[0].text;
}

export default CompletionSearch;
