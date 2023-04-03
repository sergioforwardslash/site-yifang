import { useState } from "react";
import './admin.css'

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    fetch("/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // Perform save action here
  };

  const handleDeleteClick = () => {
    // Perform delete action here
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-container">
        <div className="admin-links">
          <h4>Functions</h4>
          <ul>
            <li>
              <a href="/admin/backgrounds">Change Background</a>
            </li>
          </ul>
        </div>
        <div className="admin-menuitem">
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
                <label htmlFor="description">Price:</label>
                <textarea
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
                  name="image"
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
}

export default App;
