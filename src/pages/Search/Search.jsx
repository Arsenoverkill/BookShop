import React, { useEffect, useState } from "react";
import { UseMainContext } from "../../Context/Context";

const Search = ({ values }) => {
  const { date, readProduct } = UseMainContext();

  let newArr = date.filter((el) => {
    return el.name == values;
  });
  useEffect(() => {
    readProduct();
  }, []);
  return (
    <div className="container">
      {newArr.map((el) => {
        return (
          <div className="books-block">
            <img src={el.image} alt="" />
            <h2>{el.name}</h2>
            <p>{el.surName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
