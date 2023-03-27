import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center font-main mt-10">
        <textarea
          className="w-4/6 p-4 font-medium focus:outline-none rounded-lg shadow-lg dark-shadwo-lg"
          cols={55}
          rows={10}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button
          className="mt-4 px-4 h-12 rounded-md font-bold shadow-lg drop-shadow-lg bg-color2 text-white hover:bg-custom_orng"
          onClick={doStuff}
        >
          Ask AI!
        </button>

        <div className="result-text px-4 py-2 mt-4 font-medium text-base w-3/4">
          {result.length > 0 ? result : null}
        </div>
      </div>
    </>
  );
}
