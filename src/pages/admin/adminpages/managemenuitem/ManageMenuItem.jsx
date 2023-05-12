import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AdminDashboardLinks } from '../../../../components';
import './managemenuitem.css'
import { menu } from '../../../../constants';
// import { Sequelize } from 'sequelize'

const ManageMenuItem = () => {
  const [editMode, setEditMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    
  });
  const [menuItems, setMenuItems] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    const data = new FormData();
    data.append('photo', event.target.files[0]);

    setFormData({
      ...formData,
      photo: data,
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData();
    // data.append('name', formData.name);
    // data.append('description', formData.description);
    // data.append('price', formData.price);
    // data.append('photo', selectedFile);
  
    axios.post('http://localhost:8000/admin/menuitem', formData)
      .then((response) => {
        console.log(formData);
        // Append the new item to the menuItems array
        // setMenuItems([...menuItems, response.data]);
      })


      .catch((error) => console.error(error));
  
    setEditMode(false);


    setSelectedFile(null);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  // const handleUpload = async (event) => {
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append("menuItemImage", file);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/admin/menuitem",
  //       formData
  //     );
  //     // const menuitem = response.data.path;  FOR USE 

  //     console.log("Photo Uploaded");
  //   } catch (error) {
  //     console.log("Error uploading photo:", error);
  //   }
  // };

  const handleSaveClick = () => {
    handleFormSubmit();
    setEditMode(false);
    setFormData({
      name: '',
      description: '',
      price: '',
      photo: null,
    });
    setSelectedFile(null);
  };

  useEffect(() => {
    axios.get('http://localhost:8000/admin/menuitem')
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteClick = () => {
    // Perform delete action here
  };
  return (
    <div className="admin-dashboard">
      <h1>
        <a href="/admin">Admin Dashboard</a>
      </h1>
      <div className="admin-container">
        <AdminDashboardLinks />
        <div className="admin-viewbox">
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
                <textarea
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
                <label htmlFor='file-upload'>Image:</label>
                <img
                  src={selectedFile ? URL.createObjectURL(selectedFile) : null}
                  alt="Selected file"
                />

              </div>
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={handleDeleteClick}>Delete</button>
            </div>
          )}
        </div>
        {menuItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <img src={item.photo} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
  }
  
  export default ManageMenuItem;
  