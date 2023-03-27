import { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

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

  return (
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
      <button type="submit">Upload</button>
    </form>
  );
}

export default App;