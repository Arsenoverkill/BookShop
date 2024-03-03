import React, { useEffect, useState } from "react";
import "./Books.css";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { UseMainContext } from "../../Context/Context";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Books = () => {
  const { date, readProduct, deletData } = UseMainContext();

  const [category, setCategory] = useState("All");
  const [data, setData] = useState([]);
  const [Admin, setAdmin] = useState(false);

  function setProductData() {
    let res = date.filter((el) => {
      return el.category == category;
    });
    setData(res);
  }
  function addAdmin() {
    let admin = JSON.parse(localStorage.getItem("admin")) || [];
    admin.map((el) => {
      return setAdmin(el);
    });
  }

  useEffect(() => {
    readProduct();
    setProductData();
    addAdmin();
  }, [data, Admin]);
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
              <label
                className="label"
                onClick={() => setCategory("motivation")}
              >
                <input type="radio" name="category" />
                Motivation
              </label>
            </div>
            <div className="checkbox1">
              <label className="label" onClick={() => setCategory("fantastic")}>
                <input type="radio" name="category" />
                Fantastic
              </label>
            </div>
            <div className="checkbox1">
              <label className="label" onClick={() => setCategory("science")}>
                <input type="radio" name="category" />
                Science
              </label>
            </div>
            <div className="checkbox1">
              <label className="label">
                <input type="radio" name="category" />
                For teenagers
              </label>
            </div>
            <div className="checkbox1">
              <label className="label">
                <input type="radio" name="category" />
                Finance
              </label>
            </div>
            <div className="checkbox1">
              <label className="label">
                <input type="radio" name="category" />
                Detective
              </label>
            </div>
            <div className="checkbox1">
              <label className="label">
                <input type="radio" name="category" />
                Romantic
              </label>
            </div>
            <div className="checkbox1">
              <label className="label">
                <input type="radio" name="category" />
                Educotional
              </label>
            </div>
            <div className="checkbox1">
              <label className="label">
                <input type="radio" name="category" />
                Religion
              </label>
            </div>
            <div className="checkbox1">
              <label className="label">
                <input type="radio" name="category" />
                Literature
              </label>
            </div>
          </div>
        </div>

        <div className="books-blocks">
          {category == "All"
            ? date.map((el) => (
                <div
                  style={{
                    marginBottom: "30px",
                  }}
                >
                  <NavLink to={`/books/${el.id}`}>
                    <div className="books-block">
                      <img src={el.image} alt="" />
                      <h3>
                        {el.name.length >= 15
                          ? el.name.slice(0, 15).concat("...")
                          : el.name}
                      </h3>
                      <p>{el.surName}</p>
                    </div>
                  </NavLink>
                  <div
                    style={{
                      display: Admin ? "flex" : "none",
                    }}
                    className="btns"
                  >
                    <button onClick={() => deletData(el.id)} className="delete">
                      <MdDelete />
                    </button>
                    <NavLink to={`/books/edit/${el.id}`}>
                      <button className="edit">
                        <MdEdit />
                      </button>
                    </NavLink>
                  </div>
                </div>
              ))
            : data.map((el) => (
                <div>
                  <NavLink to={`/books/${el.id}`}>
                    <div className="books-block">
                      <img src={el.image} alt="" />
                      <h3>
                        {el.name.length >= 15
                          ? el.name.slice(0, 15).concat("...")
                          : el.name}
                      </h3>
                      <p>{el.surName}</p>
                    </div>
                  </NavLink>
                  <div
                    style={{
                      display: Admin ? "flex" : "none",
                    }}
                    className="btns"
                  >
                    <button onClick={() => deletData(el.id)} className="delete">
                      <MdDelete />
                    </button>
                    <NavLink to={`/books/edit/${el.id}`}>
                      <button className="edit">
                        <MdEdit />
                      </button>
                    </NavLink>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
