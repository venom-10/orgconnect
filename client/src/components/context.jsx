import { createContext, useState } from "react";

export const context = createContext(null);

const init = {
  fname: "",
  lname: "",
  Ph_no: "",
  gender: "option",
  city: "",
  state: "",
  address: "",
  dob: "00-00-0000",
  profile: "",
};

export const ContextProvider = ({ children }) => {
  
  const [details, setDetails] = useState(init);

  const handleChangeAll = (e) => {
    const { name, value } = e.target;
    setDetails((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const value = {details, handleChangeAll};
  return <context.Provider value = {value}>{children}</context.Provider>
}