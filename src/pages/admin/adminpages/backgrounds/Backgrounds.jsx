import { useState, useEffect } from "react";
import "./backgrounds.css";
import { images } from "../../../../constants";
import axios from "axios";
import { AdminDashboardLinks } from "../../../../components";

const Backgrounds = () => {
  let [selectedBackground, setSelectedBackground] = useState(images.background);
  const [customBackgrounds, setCustomBackgrounds] = useState([]);

  const handleBackgroundChange = (background) => {
    setSelectedBackground(background);

    axios
      .post(
        "http://localhost:8000/admin/backgrounds",
        { path: selectedBackground }
      )
      .then(() => {
        console.log("Photo toggled");
      })
      .catch((error) => {
        console.log("Error toggling photo:", error);
      });
  };

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("backgroundImage", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/admin/backgrounds",
        formData
      );
      const background = response.data.path;
      setCustomBackgrounds([...customBackgrounds, background]);
      console.log("Photo Uploaded");
    } catch (error) {
      console.log("Error uploading photo:", error);
    }
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${selectedBackground})`;
    document.body.style.backgroundSize = "100%";
  }, [selectedBackground])

  useEffect(() => {
    const fetchBackgrounds = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/admin/backgrounds"
        );
        setCustomBackgrounds(response.data);
      } catch (error) {
        console.log("Error fetching backgrounds:", error);
      }
    };

    fetchBackgrounds();
  }, []);

  const renderBackgroundButton = (background, index, altText) => (
    <button
      key={`background-${index}`}
      className="backgroundButton"
      style={{ backgroundImage: `url(http://localhost:8000/${background})` }}
      onClick={() => handleBackgroundChange(background)}
    />    
  );

  const renderPredefinedBackgroundButton = (background, index) => (
    <button
      key={`background-${index}`}
      className="backgroundButton"
      style={{ backgroundImage: `url(${background})` }}
      onClick={() => handleBackgroundChange(background)}
    />
  )

  const predefinedBackgrounds = [
    images.background,
    images.wild,
    images.flowers,
    images.beach,
  ];

  return (
    <div className="admin-dashboard">
      <h1>
        <a href="/admin">Admin Dashboard</a>
      </h1>
      <div className="admin-container">
        <AdminDashboardLinks />
        <div className="admin-viewbox">
          <div className="bMain">
            <h1>Background/Theme Changes</h1>
            <center>
              {predefinedBackgrounds.map((background, index) =>
                renderPredefinedBackgroundButton(
                  background,
                  index,
                  `Background ${index + 1}`
                )
              )}
              {customBackgrounds.map((background, index) =>
                renderBackgroundButton(
                  background,
                  index + predefinedBackgrounds.length,
                  `Custom Background ${index + 1}`
                )
              )}
            </center>

            <div>
              <label htmlFor="file-upload">Upload a custom background:</label>
              <input id="file-upload" type="file" onChange={handleUpload} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backgrounds;