import React from "react";

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1 className="heading text-center w-screen text-3xl font-main">
        CHAT AI
      </h1>

      <div className="grid grid-cols-3 gap-7 place-items-center mt-14">
        {arrayItems.map((item) => {
          return (
            <button
              className="option_box  hover:bg-gray-900 hover:text-white rounded-lg flex justify-center items-center flex-col gap-2 text-sm font-semibold font-main shadow-lg dark-shadow-lg"
              onClick={() => selectOption(item.option)}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </button>
          );
        })}
      </div>
    </>
  );
}
