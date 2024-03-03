import React, { useState } from "react";
import "./Admin.css";
import { UseMainContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
const Admin = () => {
  const [name, setName] = useState("");
  const [image, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [surName, setAuthor] = useState("");
  const [plot, setPlot] = useState("");
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(1);
  const { addData, date } = UseMainContext();
  const navigate = useNavigate();

  function setData() {
    let obj = {
      name,
      image,
      price,
      surName,
      plot,
      count,
      category,
    };
    if (
      name !== "" &&
      price !== "" &&
      image !== "" &&
      surName !== "" &&
      plot !== "" &&
      category !== ""
    ) {
      addData(obj);
    } else {
      alert("Заполните все поле !!!");
    }
  }
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h1>Admin</h1>
          <button
            onClick={() => {
              let admin = JSON.parse(localStorage.getItem("admin")) || [];
              admin = admin.map((el) => {
                return (el = false);
              });
              localStorage.setItem("admin", JSON.stringify(admin));
              navigate("/password");
            }}
            className="leave"
          >
            Выйти С Возможнестей <br /> Админа
          </button>
          <div class="coolinput">
            <label for="input" class="text">
              Name:
            </label>
            <input
              style={{
                boxShadow: name ? "" : "inset 0px .2px 3px red",
                transition: "1s",
              }}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name..."
              name="input"
              class="input"
            />
          </div>
          <div class="coolinput">
            <label for="input" class="text">
              Author:
            </label>
            <input
              style={{
                boxShadow: surName ? "" : "inset 0px .2px 3px red",
                transition: "1s",
              }}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Author..."
              name="input"
              class="input"
            />
          </div>
          <div class="coolinput">
            <label for="input" class="text">
              Price:
            </label>
            <input
              style={{
                boxShadow: price ? "" : "inset 0px .2px 3px red",
                transition: "1s",
              }}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="Price..."
              name="input"
              class="input"
            />
          </div>
          <div class="coolinput">
            <label for="input" class="text">
              URL:
            </label>
            <input
              style={{
                boxShadow: image ? "" : "inset 0px .2px 3px red",
                transition: "1s",
              }}
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              placeholder="URL..."
              name="input"
              class="input"
            />
          </div>
          <div class="coolinput">
            <label for="input" class="text">
              Plot:
            </label>
            <input
              style={{
                boxShadow: plot ? "" : "inset 0px .2px 3px red",
                transition: "1s",
              }}
              onChange={(e) => setPlot(e.target.value)}
              type="text"
              placeholder="Plot..."
              name="input"
              class="input"
            />
          </div>
          <div
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "7.7pc",
                top: "22px",
                color: "white",
                cursor: "pointer",
              }}
            >
              {" "}
              <FaChevronDown />
            </div>
            <select
              className="select-box"
              onChange={(e) => setCategory(e.target.value)}
              style={{ cursor: "pointer" }}
            >
              <option value="psychology">Psychology</option>
              <option value="motivation">Motivation</option>
              <option value="fantastic">Fantastic</option>
              <option value="science">Science</option>
            </select>
          </div>
          <button className="button" onClick={() => setData()}>
            <span class="transition"></span>
            <span class="gradient"></span>
            <span class="label">CREATE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
