import React from "react";
import { MenuItem } from "../../components";
import { images, menu } from "../../constants";
import "./order.css";

const Order = () => {
  return (
    <div
      className="order section-padding wrapper"
      style={{
        backgroundImage: `url(${images.background})`,
        backgroundSize: "100%",
      }}
    >
      <div className="order-title">
        <h1>Order With Us</h1>
      </div>

      <div className="order-menu">
        <div className="order-menu-winterlimited">
          <p>☃️Winter Limited Ginger Series</p>
          <div className="order-menu-items">
            {menu.winterlimited.map((tea, index) => (
              <MenuItem
                key={tea.title + index}
                title={tea.title}
                price={tea.price}
                img={tea.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
