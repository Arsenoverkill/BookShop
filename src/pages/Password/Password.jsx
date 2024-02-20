import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import "./Password.css";
import { useNavigate } from "react-router-dom";
import click from "../Password/Error.mp3";
import { UseMainContext } from "../../Context/Context";

const Password = () => {
  const [error, setError] = useState(false);
  const [eye, setEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const { date, readProduct } = UseMainContext();

  useEffect(() => {
    readProduct();
  }, []);

  function audio() {
    new Audio(click).play();
  }

  function openAdmin() {
    date.map((el) => {
      if (el.password == code && el.email == email) {
        let admin = JSON.parse(localStorage.getItem("admin")) || [];
        admin = admin.map((el)=>{
          return el = true
        })
        localStorage.setItem("admin", JSON.stringify(admin));
        navigate("/admin");
      } else {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 800);
        setTimeout(() => {
          setError(true);
        }, 800);
        setTimeout(() => {
          setError(false);
        }, 1600);
        audio();
      }
    });
  }
  return (
    <div id="password">
      <div className="password">
        <div class="login-card">
          <div class="card-header">
            <h1>Login</h1>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-2"
                  type="text"
                  id="username"
                  name="username"
                  required=""
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  onChange={(e) => setCode(e.target.value)}
                  className="input-2"
                  type={eye ? "text" : "password"}
                  id="password"
                  name="password"
                  required=""
                />
                <FaEye onClick={() => setEye(!eye)} className="eye" />
              </div>
              <div
                style={{
                  display: loading ? "flex" : "none",
                }}
                class="loader"
              >
                <div class="worm"></div>
                <div class="circleMiddle"></div>
              </div>
              <h2
                style={{
                  display: error ? "block" : "none",
                  color: "red",
                  textAlign: "center",
                }}
              >
                Вход не выплнен !
              </h2>
              <div class="form-group">
                <div onClick={openAdmin} type="submit" class="login-button">
                  Login
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
