import { Configuration, OpenAIApi } from "openai";
import OptionSelection from './Ai/OptionSelection';
import Translation from "./Ai/Translation";
import { arrayItems } from "../AiOptions";
import { useState } from "react";
import './Ai/Message.css'

function Message() {

  console.log(process.env.REACT_APP_Open_AI_Key)
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_Open_AI_Key
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  // console.log(import.meta.env.VITE_Open_AI_Key);
  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default Message;