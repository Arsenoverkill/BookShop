import React, { useEffect, useState } from "react";
import "./Order.css";

const Order = () => {
  const [order, setOrder] = useState([]);
  function getOrder() {
    let order = JSON.parse(localStorage.getItem("order")) || [];
    setOrder(order);
  }
  function orderDelete(id) {
    let data = JSON.parse(localStorage.getItem("order")) || [];
    data = order.filter((el) => el.id !== id);
    localStorage.setItem("order", JSON.stringify(data));
    getOrder();
  }
  useEffect(() => {
    getOrder();
  }, []);
  return order.length == 0 ? (
    <div className="emty">
      <p>В корзине пока ничего нету</p>
      <img
        src="https://assets-global.website-files.com/646218c67da47160c64a84d5/6463461e80a208f3afa59355_54.png"
        alt=""
      />
    </div>
  ) : (
    <div className="posts">
      <div className="container">
        <h1>Basket</h1>
        <div className="order_blocks">
          {order.map((el) => (
            <div className="order_block">
              <img src={el.image} alt="" />
              <div className="order_info">
                <div className="order_delete">
                  <h1>{el.name}</h1>
                  <p onClick={() => orderDelete(el.id)}>remove book</p>
                </div>
                <h3>{el.surName}</h3>
                <div className="order_price">
                  <h4>Price: ${el.price * el.count}</h4>
                  <p>Count: {el.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
