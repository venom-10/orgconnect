import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./Ai/OptionSelection";
import Translation from "./Ai/Translation";
import { arrayItems } from "../AiOptions";
import { useState } from "react";

function Message() {
  
  console.log('env', process.env.REACT_APP_API_KEY);

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  return (
    <div className="bg-gray-100 basis-11/12 py-14">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default Message;
