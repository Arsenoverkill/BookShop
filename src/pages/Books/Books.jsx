import React, { useEffect, useState } from "react";
import "./Books.css";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { UseMainContext } from "../../Context/Context";

const Books = () => {
  const { date, readProduct } = UseMainContext();

  const [category, setCategory] = useState("All");
  const [data, setData] = useState([]);
  function setProductData() {
    let res = date.filter((el) => {
      return el.category == category;
    });
    setData(res);
  }

  useEffect(() => {
    readProduct();
    setProductData();
  }, [data]);
  return (
    <div id="books">
      <div className="container">
        <div className="books">
          <div className="hero">
            <h1>All Boooks</h1>
            <p>Here you can find all the books you need </p>
          </div>
          <div className="section">
            <div className="filters">
              <div className="filt">
                <h2>Filters </h2>
                <p>Clear filters</p>
              </div>
              <h3>Genres</h3>
            </div>
            <div className="filter-btn">
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="All">
                  All <IoIosArrowDown />
                </option>
                <option value="psychology">
                  Psychology <IoIosArrowDown />
                </option>
                <option value="motivation">
                  Motivation <IoIosArrowDown />
                </option>
                <option value="fantastic">
                  Fantastic <IoIosArrowDown />
                </option>
                <option value="science">
                  Science <IoIosArrowDown />
                </option>
              </select>
            </div>
          </div>
          <div className="section1">
            <div className="checkbox1">
              <label
                className="label"
                onClick={() => setCategory("psychology")}
              >
                <input type="radio" name="category" />
                Psychology
              </label>
            </div>
            <div className="checkbox1">
              <label  className="label" onClick={() => setCategory("motivation")}>
                <input type="radio" name="category" />
                Motivation
              </label>
            </div>
            <div className="checkbox1">
              <label  className="label"onClick={() => setCategory("fantastic")}>
                <input type="radio" name="category" />
                Fantastic
              </label>
            </div>
            <div className="checkbox1">
              <label  className="label"onClick={() => setCategory("science")}>
                <input type="radio" name="category" />
                Science
              </label>
            </div>
            <div className="checkbox1">
              <input type="radio" name="category" />
              <p>For teenagers</p>
            </div>
            <div className="checkbox1">
              <input type="radio" name="category" />
              <p>Finance</p>
            </div>
            <div className="checkbox1">
              <input type="radio" name="category" />
              <p>Detective</p>
            </div>
            <div className="checkbox1">
              <input type="radio" name="category" />
              <p>Romantic</p>
            </div>
            <div className="checkbox1">
              <input type="radio" name="category" />
              <p>Psychology</p>
            </div>
            <div className="checkbox1">
              <input type="radio" name="category" />
              <p>Self-improvement</p>
            </div>
            <div className="checkbox1">
              <input type="radio" name="category" />
              <p>Educotional</p>
            </div>
            <div className="checkbox1">
              <input type="radio" name="category" />
              <p>Literature</p>
            </div>
            <div className="checkbox1">
              <input type="radio" name="category" />
              <p>Religion</p>
            </div>
          </div>
        </div>

        <div className="books-blocks">
          {category == "All"
            ? date.map((el) => (
                <NavLink to={`/books/${el.id}`}>
                  <div className="books-block">
                    <img src={el.image} alt="" />
                    <h3>{el.name}</h3>
                    <p>{el.surName}</p>
                  </div>
                </NavLink>
              ))
            : data.map((el) => (
                <NavLink to={`/books/${el.id}`}>
                  <div className="books-block">
                    <img src={el.image} alt="" />
                    <h3>{el.name}</h3>
                    <p>{el.surName}</p>
                  </div>
                </NavLink>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
