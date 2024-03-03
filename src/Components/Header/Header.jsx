import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { RiAdminFill } from "react-icons/ri";
import { FaLockOpen } from "react-icons/fa6";
import "./Header.scss";
import { UseMainContext } from "../../Context/Context";

const Header = () => {
  const navigate = useNavigate();
  const [Admin, setAdmin] = useState([]);
  const [order, setOrder] = useState([]);
  const [value, setValue] = useState("");

  const { date, readProduct } = UseMainContext();

  let newArr = date.filter((el) =>
    el.name.toLowerCase().includes(value.toLowerCase())
  );

  function addAdmin() {
    let admin = JSON.parse(localStorage.getItem("admin")) || [];
    setAdmin(admin);
  }
  function getOrder() {
    let order2 = JSON.parse(localStorage.getItem("order")) || [];
    setOrder(order2);
  }
  useEffect(() => {
    addAdmin();
    readProduct();
    getOrder();
  }, [Admin, order]);
  function BooksUp() {
    window.scroll({
      top: 1650,
      left: 0,
      behavior: "smooth",
    });
  }
  function CategoriesUp() {
    window.scroll({
      top: 600,
      left: 0,
      behavior: "smooth",
    });
  }
  function AboutUsUp() {
    window.scroll({
      top: 2150,
      left: 0,
      behavior: "smooth",
    });
  }
  function RecentUp() {
    window.scroll({
      top: 1050,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="links">
            <NavLink to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfkOlyNoAxB5K8BQkD4J1wImx0Y64_ohxQrMIR7wn7stw_VjPsBvkMwO1Rg5kAR6Tizo&usqp=CAU"
                alt=""
              />
            </NavLink>
            <NavLink
              className="first"
              onClick={() => {
                CategoriesUp();
              }}
              to="/"
            >
              Categories
            </NavLink>
            <NavLink
              className="second"
              onClick={() => {
                RecentUp();
              }}
              to="/"
            >
              Recent
            </NavLink>
            <NavLink
              className="three"
              onClick={() => {
                BooksUp();
              }}
              to="/"
            >
              Books
            </NavLink>
            <NavLink
              className="four"
              onClick={() => {
                AboutUsUp();
              }}
              to="/"
            >
              About Us
            </NavLink>
          </div>
          <div className="searchs">
            <div class="search">
              <input
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search..."
                type="text"
              />
              <button type="submit">Search</button>
              <div
                style={{
                  display: value ? "flex" : "none",
                  overflowY: newArr.length > 1 ? "scroll" : "none",
                  height:
                    newArr.length > 1
                      ? "300px"
                      : newArr.length == 1
                      ? "150px"
                      : "0px",
                }}
                className="options"
              >
                {newArr.map((el) => (
                  <NavLink to={`/books/${el.id}`}>
                    <div className="books">
                      <div className="book">
                        <img src={el.image} alt="" />
                        <div className="text">
                          <h4>
                            {el.name.length > 20
                              ? el.name.slice(0, 20).concat("...")
                              : el.name}
                          </h4>
                          <h6>{el.surName}</h6>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="basket_quintity">
              <SlBasket
                style={{
                  fontSize: "25px",
                }}
                onClick={() => {
                  navigate("/order");
                }}
                className="basket-input"
              />

              <div
                style={{
                  display: order.length == 0 ? "none" : "block",
                }}
                className="count"
              >
                <p>{order.length}</p>
              </div>
            </div>
            {Admin.map((il) => {
              return il ? (
                <FaLockOpen
                  style={{
                    fontSize: "25px",
                  }}
                  onClick={() => {
                    Admin.map((el) => {
                      return el == true
                        ? navigate("/admin")
                        : navigate("/password");
                    });
                  }}
                  className="basket-input"
                />
              ) : (
                <RiAdminFill
                  style={{
                    fontSize: "25px",
                  }}
                  onClick={() => {
                    Admin.map((el) => {
                      return el == true
                        ? navigate("/admin")
                        : navigate("/password");
                    });
                  }}
                  className="basket-input"
                />
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
