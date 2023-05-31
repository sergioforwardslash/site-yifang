import React, { useState } from 'react';
import axios from 'axios';
import { AdminDashboardLinks } from '../../../../components';
import './managemenuitem.css';

const ManageMenuItem = () => {
  const [editMode, setEditMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('photo', selectedFile);

    axios
      .post('http://localhost:8000/admin/menuitem', data)
      .then((response) => {
        console.log(response);
        setFormData({
          name: '',
          description: '',
          price: '',
        });
        setSelectedFile(null);
        setEditMode(false);

        // Fetch the newly created menu item from your API
        axios
          .get('http://localhost:8000/admin/menuitem')
          .then((response) => {
            const newItem = response.data; // Assuming the API response contains the new menu item object
            // Update the frontend state with the new menu item
            setFormData(newItem);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    handleFormSubmit();
  };

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
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price: $</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  id="image"
                  name="photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
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
                  src={selectedFile ? URL.createObjectURL(selectedFile) : null}
                  alt="Selected file"
                />
              </div>
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={handleDeleteClick}>Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageMenuItem;
