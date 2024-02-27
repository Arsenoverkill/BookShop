import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { api } from "../fakeAPI";

const mainContext = createContext();
export const UseMainContext = () => useContext(mainContext);

const Context = ({ children }) => {
  const [date, setDate] = useState([]);
  async function addData(obj) {
    await axios.post(api, obj);
  }
  async function readProduct() {
    let res = await axios(api);
    setDate(res.data);
  }
  const values = {
    addData,
    readProduct,
    date,
  };
  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
};

export default Context;
