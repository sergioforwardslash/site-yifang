import { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('name', name);
    formData.append('description', description);

    fetch('/upload-image', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  const handleEditClick = () => {
    setEditMode(true);
  }

  const handleSaveClick = () => {
    setEditMode(false);
    // Perform save action here
  }

  const handleDeleteClick = () => {
    // Perform delete action here
  }

  return (
    <div>
      {editMode ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
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
            <span>{name}</span>
          </div>
          <div>
            <label>Description:</label>
            <span>{description}</span>
          </div>
          <div>
            <label>Image:</label>
            <img src={selectedFile ? URL.createObjectURL(selectedFile) : null} alt="Selected file" />
          </div>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default App;
