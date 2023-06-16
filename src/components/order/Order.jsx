import React, { useEffect, useState } from "react";
import { MenuItem } from "../../components";
import { images, menu } from "../../constants";
import "./order.css";

import axios from "axios";


const Order = () => {

  const [menuItem, setMenuItem] = useState([]);

  const fetchMenuItem = async () => {
    try {
      const response = await axios.get("http://localhost:8000/admin/menuitem");
      const updatedMenuItem = response.data;
      setMenuItem(updatedMenuItem); // Update the menuItem state with fetched data
      console.log(updatedMenuItem);
    } catch (error) {
      console.log("Error fetching menu item:", error);
    }
  };
  useEffect(() => {
    fetchMenuItem();
  }, []);
  

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
            {menuItem.map((item) => (
                <MenuItem
                  key={item.id}
                  title={item.name}
                  price={item.price}
                  img={item.photo}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
