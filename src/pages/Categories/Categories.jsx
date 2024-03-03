import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Categories.css";
import { UseMainContext } from "../../Context/Context";

const Categories = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { date, readProduct } = UseMainContext();
  function getBooksData() {
    let res = date.filter((el) => {
      return el.id == id;
    });
    setPosts(res);
  }
  function setOrder() {
    let order = JSON.parse(localStorage.getItem("order")) || [];
    let res = order.some((el) => {
      let str = posts.some((il) => {
        return il.id == el.id;
      });
      return str;
    });
    if (res == false) {
      order.push(posts[0]);
      localStorage.setItem("order", JSON.stringify(order));
      navigate("/order");
    } else {
      order.map((el) => {
        posts.map((il) => {
          if (il.id == el.id) {
            return (el.count += il.count);
          }
        });
      });
      localStorage.setItem("order", JSON.stringify(order));
    }
  }
  useEffect(() => {
    readProduct();
    getBooksData();
  }, [id,posts]);
  return (
    <div className="posts">
      <div className="container">
        <h1>Books</h1>
        {posts.map((el) => (
          <div className="posts_block">
            <img src={el.image} alt="" />
            <div className="books_name">
              <h1>{el.name}</h1>
              <h2>Автор: {el.surName}</h2>
              <h3>{el.plot}</h3>
              <h4>{el.price * el.count}$</h4>
              <div className="shop_book">
                <button
                  onClick={() => {
                    setOrder();
                    navigate("/order");
                  }}
                  class="btn"
                >
                  Buy now
                </button>
                <div className="quintity">
                  <button onClick={() => {
                    if (el.count > 1) {
                      el.count -= 1;
                    }
                  }} class="pushable">
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <span class="front"> - </span>
                  </button>
                  <p>{el.count}</p>
                  <button
                    onClick={() => el.count += 1}
                    class="pushable"
                  >
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <span class="front"> + </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
