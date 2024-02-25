import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsBasket2Fill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import "./Header.scss";

const Header = ({ setValue }) => {
  const navigate = useNavigate();
  const [Admin, setAdmin] = useState([]);

  function addAdmin() {
    let admin = JSON.parse(localStorage.getItem("admin")) || [];
    setAdmin(admin);
  }
  useEffect(() => {
    addAdmin();
  }, []);
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
              onClick={() => {
                CategoriesUp();
              }}
              to="/"
            >
              Categories
            </NavLink>
            <NavLink
              onClick={() => {
                RecentUp();
              }}
              to="/"
            >
              Recent
            </NavLink>
            <NavLink
              onClick={() => {
                BooksUp();
              }}
              to="/"
            >
              Books
            </NavLink>
            <NavLink
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
              <button
                onClick={() => {
                  navigate("/search");
                }}
                type="submit"
              >
                Search
              </button>
            </div>
            <BsBasket2Fill
              onClick={() => {
                navigate("/order");
              }}
              className="basket-input"
            />
            <RiAdminFill
              onClick={() => {
                Admin.map((el) => {
                  return el == true
                    ? navigate("/admin")
                    : navigate("/password");
                });
              }}
              className="basket-input"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
