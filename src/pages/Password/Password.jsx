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

  const [time, setTime] = useState(15);
  const [time2, setTime2] = useState(30);
  const [attempts, setAttemts] = useState(0);
  const [one, setOne] = useState(false);

  function getTime() {
    if (attempts == 3) {
      setOne(true);
      if (time > 0) {
        setTime(time - 1);
      } else {
        setAttemts(0);
        setTime2(time2 + time2);
        setTime(time2);
      }
    } else {
      setOne(false);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      getTime();
    }, 500);
  });
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
        admin = admin.map((el) => {
          return (el = true);
        });
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
        setAttemts(attempts + 1);
      }
    });
  }
  return (
    <div id="password">
      <div
        style={{
          display: one ? "none" : "flex",
        }}
        className="password"
      >
        <div class="login-card">
          <div class="card-header">
            <h1>Login</h1>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  style={{
                    boxShadow: email == "" ? "inset 0px 2px 5px red" : "",
                  }}
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
                  style={{
                    boxShadow: code == "" ? "inset 0px 2px 5px red" : "",
                  }}
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
      <h1
        style={{
          display: attempts == 3 ? "block" : "none",
          color: "red",
          position: "absolute",
          zIndex: "1",
          marginTop: "200px",
          marginLeft: "550px",
          fontSize: "25px",
        }}
      >
        Пожалуйста подождите {time} секунд
      </h1>
      <div
        style={{
          display: one ? "flex" : "none",
        }}
        className="password asd"
      >
        <div class="login-card">
          <div class="card-header">
            <h1>Login</h1>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <div
                  style={{
                    boxShadow: email == "" ? "inset 0px 2px 5px red" : "",
                    height: " 44px",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-2"
                  type="text"
                  id="username"
                  name="username"
                  required=""
                ></div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <div
                  style={{
                    boxShadow: email == "" ? "inset 0px 2px 5px red" : "",
                    height: " 44px",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-2"
                  type="text"
                  id="username"
                  name="username"
                  required=""
                ></div>
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
                <div type="submit" class="login-button">
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
