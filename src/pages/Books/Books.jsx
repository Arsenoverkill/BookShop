import React, { useEffect, useState } from "react";
import "./Books.css";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { UseMainContext } from "../../Context/Context";

const Books = () => {
  const [filter, setFilter] = useState("All");
  const { date, readProduct } = UseMainContext();

  useEffect(() => {
    readProduct();
  }, []);
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
              <button
                onClick={() => {
                  setFilter("All");
                }}
              >
                All <IoIosArrowDown />
              </button>
              <button
                onClick={() => {
                  setFilter("popular");
                }}
              >
                Popular <IoIosArrowDown />
              </button>
            </div>
          </div>
          <div className="section1">
            <div className="checkbox1">
              <input type="checkbox" />
              <p>Autographed Books</p>
            </div>
            <div className="checkbox1">
              <input type="checkbox"/>
              <p>Sci-Fi</p>
            </div>
            <div className="checkbox1">
              <input type="checkbox" />
              <p>For-kid</p>
            </div>
            <div className="checkbox1">
              <input type="checkbox" />
              <p>For teenagers</p>
            </div>
            <div className="checkbox1">
              <input type="checkbox" />
              <p>Finance</p>
            </div>
            <div className="checkbox1">
              <input type="checkbox" />
              <p>Detective</p>
            </div>
            <div className="checkbox1">
              <input type="checkbox" />
              <p>Romantic</p>
            </div>
            <div className="checkbox1">
              <input type="checkbox" />
              <p>Psychology</p>
            </div>
            <div className="checkbox1">
              <input type="checkbox" />
              <p>Self-improvement</p>
            </div>
            <div className="checkbox1">
              <input type="checkbox" />
              <p>Educotional</p>
            </div>
            <div className="checkbox1">
              <input type="checkbox" />
              <p>Literature</p>
            </div>
            <div className="checkbox1">
              <input type="checkbox" />
              <p>Religion</p>
            </div>
          </div>
        </div>

        <div className="books-blocks">
          {date.map((el) => {
            if (filter == "All") {
              return (
                <NavLink to={`/books/${el.id}`}>
                  <div className="books-block">
                    <img src={el.image} alt="" />
                    <h3>{el.name}</h3>
                    <p>{el.surName}</p>
                  </div>
                </NavLink>
              );
            } else if (filter == "popular") {
              if (el.keys !== el.popular) {
                return (
                  <NavLink to={`/books/${el.id}`}>
                    <div className="books-block">
                      <img src={el.image} alt="" />
                      <h3>{el.name}</h3>
                      <p>{el.surName}</p>
                    </div>
                  </NavLink>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Books;
