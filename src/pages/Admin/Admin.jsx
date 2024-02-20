import React, { useState } from "react";
import "./Admin.css";
import { UseMainContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [name, setName] = useState("");
  const [image, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [surName, setAuthor] = useState("");
  const [plot, setPlot] = useState("");
  const [count, setCount] = useState(1);
  const { addData } = UseMainContext();
  const navigate = useNavigate();

  function setData() {
    let obj = {
      name,
      image,
      price,
      surName,
      plot,
      count,
    };
    if (
      name !== "" &&
      price !== "" &&
      image !== "" &&
      surName !== "" &&
      plot !== ""
    ) {
      addData(obj);
    } else {
      alert("Заполнтье все поле !!!");
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
              admin = admin.map((el)=>{
                return el = false
              })
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
              onChange={(e) => setPlot(e.target.value)}
              type="text"
              placeholder="Plot..."
              name="input"
              class="input"
            />
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
