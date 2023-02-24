import React from "react";
import { MenuItem } from "../../components";
import { images, menu } from "../../constants";
import "./order.css";

const Order = () => {
  return (
    <div
      className="order section-padding"
      style={{
        backgroundImage: `url(${images.background})`,
        backgroundSize: "100%",
      }}
    >
      <div className="order-title">
        <h1>Menu</h1>
      </div>

      <div className="order-menu">
        <div className="order-menu-winterlimited">
          <p className="order-menu-heading">☃️Winter Limited Ginger Series</p>
          <div className="order-menu-items">
            {menu.winterlimited.map((wintertea, index) => (
              <MenuItem
                key={wintertea.title + index}
                title={wintertea.title}
                price={wintertea.price}
                img={wintertea.image}
              />
            ))}
          </div>
        </div>

        <div className="order-menu-tea">
          <p className="order-menu-heading">Tea</p>
          <div className="order-menu-items">
            {menu.tea.map((tea, index) => (
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
