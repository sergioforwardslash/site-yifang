import React, { useEffect, useState } from "react";
import axios from "axios";
import { AdminDashboardLinks } from "../../../../components";
import { MenuItem } from "../../../../components";
import "./managemenuitem.css";

const ManageMenuItem = () => {
  const [menuItem, setMenuItem] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "" ,
    description: "",
    price: "",
    photo: null,
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    const data = new FormData();
    data.append("photo", event.target.files[0]);

    setFormData({
      ...formData,
      photo: event.target.files[0],
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("photo", selectedFile);

    try {
      const response = await axios
        .post("http://localhost:8000/admin/menuitem", data)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
        fetchMenuItem();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    handleFormSubmit();
    setEditMode(false);
    setFormData({
      name: "",
      description: "",
      price: "",
      photo: null,
    });
    setSelectedFile(null);
  };

  const handleDeleteClick = () => {
    // Perform delete action here
  };

  const fetchMenuItem = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/admin/menuitem"
      );
      const updatedMenuItem = response.data;
      setMenuItem(updatedMenuItem);
      console.log(updatedMenuItem)
    } catch (error) {
      console.log("Error fetching menu item:", error);
    }
  };

  useEffect(() => {
    fetchMenuItem();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>
        <a href="/admin">Admin Dashboard</a>
      </h1>
      <div className="admin-container">
        <AdminDashboardLinks />
        <div className="admin-viewbox">
          <div>
            <h2>Menu Item</h2>
            {editMode ? (
              <form onSubmit={handleFormSubmit}>
                <div className="menuitem-name">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="menuitem-description">
                  <label htmlFor="description">Description:</label>
                  <input
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="menuitem-price">
                  <label htmlFor="price">Price: $</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="image">Image:</label>
                  <input
                    type="file"
                    id="image"
                    name="photo"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                <button type="submit">Save</button>
              </form>
            ) : (
              <div>
                <div>
                  <label>Name:</label>
                  <span>{formData.name}</span>
                </div>
                <div>
                  <label>Description:</label>
                  <span>{formData.description}</span>
                </div>
                <div>
                  <label>Price:</label>
                  <span>{formData.price}</span>
                </div>
                <div>
                  <label>Image:</label>
                  <img
                    src={
                      selectedFile ? URL.createObjectURL(selectedFile) : null
                    }
                    alt="Selected file"
                  />
                </div>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
              </div>
            )}
          </div>

          <div className="menuitem-list">
            <h2>Menu Items</h2>
            <div className="order-menu-items">
              {menuItem.map((item) => (
                <MenuItem
                  key={item.id}
                  title={item.name}
                  price={item.price}
                  img={item.photo}
                />

                // <div key={index} className="menuitem">
                //   <p>{item.name}</p>
                //   <p>{item.description}</p>
                //   <p>{item.price}</p>
                //   <img src={item.photo} alt="menu-item" />
                // </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMenuItem;
