import React from "react";
import "./menuitem.css";

const MenuItem = ({ title, price, img }) => (
  <div className="menuitem">
    <div className="menuitem-image">
      <img src={img} alt='menu-item'/>
    </div>
    <div className="menuitem-head">
      <div className="menuitem-name">
        <p>{title}</p>
      </div>
      <div className="menuitem-dash" />
      <div className="menuitem-price">
        <p>{price}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
