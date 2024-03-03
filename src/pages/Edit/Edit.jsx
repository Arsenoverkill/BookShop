import React, { useEffect, useState } from "react";
import { UseMainContext } from "../../Context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
const Edit = () => {
  const [name, setName] = useState("");
  const [image, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [surName, setAuthor] = useState("");
  const [plot, setPlot] = useState("");
  const [category, setCategory] = useState("");
  const { editData, date } = UseMainContext();
  const navigate = useNavigate();

  const { id } = useParams();

  function saveEditData() {
    let newArr = date.filter((el) => {
      return el.id == id;
    });
    newArr.map((el) => {
      setName(el.name);
      setUrl(el.image);
      setPrice(el.price);
      setAuthor(el.surName);
      setPlot(el.plot);
      setCategory(el.category);
    });
  }

  function saveData() {
    let newEditObj = {
      name,
      image,
      price,
      surName,
      plot,
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
      editData(id, newEditObj);
    } else {
      alert("Заполните все поле !!!");
    }
  }

  useEffect(() => {
    saveEditData();
  }, []);
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h1>EDIT</h1>
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
              value={name}
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
              value={surName}
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
              value={price}
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
              value={image}
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
              value={plot}
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
                left: "6.9pc",
                top: "22px",
                color: "white",
                cursor: "pointer",
              }}
            >
              {" "}
              <FaChevronDown />
            </div>
            <select
              style={{
                cursor: "pointer",
              }}
              className="select-box"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="psychology">Psychology </option>
              <option value="motivation">Motivation</option>
              <option value="fantastic">Fantastic</option>
              <option value="science">Science</option>
            </select>
          </div>
          <button
            className="button"
            onClick={() => {
              saveData();
              navigate("/books");
            }}
          >
            <span class="transition"></span>
            <span class="gradient"></span>
            <span class="label">SAVE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
