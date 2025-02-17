import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UpdateImages.css';

const UpdateImages = () => {
  const [images, setImages] = useState({
    cat1: '',
    cat2: '',
    cat3: '',
    cat4: '',
    cat5: '',
    cat6: '',
    cat7: '',
    cat8: '',
    cat9: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState({});
  const [inputValues, setInputValues] = useState({
    cat1: '',
    cat2: '',
    cat3: '',
    cat4: '',
    cat5: '',
    cat6: '',
    cat7: '',
    cat8: '',
    cat9: ''
  });
  const [jwtToken, setJwtToken] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/ads_img/1'); // No JWT token needed for GET request
        console.log('Fetched images:', response.data);
        // Prepend 'http://localhost:3000' to each image URL
        setImages({
          cat1: `http://localhost:3000${response.data.cat1}`,
          cat2: `http://localhost:3000${response.data.cat2}`,
          cat3: `http://localhost:3000${response.data.cat3}`,
          cat4: `http://localhost:3000${response.data.cat4}`,
          cat5: `http://localhost:3000${response.data.cat5}`,
          cat6: `http://localhost:3000${response.data.cat6}`,
          cat7: `http://localhost:3000${response.data.cat7}`,
          cat8: `http://localhost:3000${response.data.cat8}`,
          cat9: `http://localhost:3000${response.data.cat9}`
        });
      } catch (error) {
        console.error('Failed to fetch images:', error);
        setError('Failed to fetch images.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleFileChange = (e, cat) => {
    const file = e.target.files[0];
    console.log(`Selected file for ${cat}:`, file);
    setSelectedFiles((prevFiles) => ({ ...prevFiles, [cat]: file }));
  };

  const handleInputChange = (e, cat) => {
    const value = e.target.value;
    setInputValues((prevValues) => ({ ...prevValues, [cat]: value }));
  };

  const handleUpdate = async (cat) => {
    if (!selectedFiles[cat]) {
      setError('No file selected.');
      console.log('No file selected for:', cat);
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFiles[cat]);
    formData.append('category', cat);

    try {
      const token = localStorage.getItem('jwtToken'); // Assuming the JWT is stored in localStorage
      console.log('Updating image for', cat, 'with token:', token);
      setJwtToken(token); // Set the JWT token to state to display it
      const response = await axios.post('http://localhost:3000/api/admin-image-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      const imageUrl = response.data.url;
      setImages((prevImages) => ({ ...prevImages, [cat]: `http://localhost:3000${imageUrl}` }));
      setMessage('Image updated successfully.');
    } catch (error) {
      console.error('Failed to update image:', error);
      setError('Failed to update image.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="vfo-grid-container">
      <div className="vfo-containers">
        <h2 className="vfo-heading">Category Images</h2>
        <div className="vfo-container1">
          <div className="vfo-container">
            <div className="vfo-image-box">
              {images.cat1 && <img src={images.cat1} alt="Category 1" className="vfo-image-preview" />}
            </div>
            <input
              type="file"
              id="cat1"
              onChange={(e) => handleFileChange(e, 'cat1')}
              className="vfo-text-box"
            />
            <input
              type="text"
              value={inputValues.cat1}
              onChange={(e) => handleInputChange(e, 'cat1')}
              placeholder="Enter additional info"
              className="vfo-text-box"
            />
            <button type="button" onClick={() => handleUpdate('cat1')} className="vfo-button">Update</button>
          </div>
          <div className="vfo-container">
            <div className="vfo-image-box">
              {images.cat2 && <img src={images.cat2} alt="Category 2" className="vfo-image-preview" />}
            </div>
            <input
              type="file"
              id="cat2"
              onChange={(e) => handleFileChange(e, 'cat2')}
              className="vfo-text-box"
            />
            <input
              type="text"
              value={inputValues.cat2}
              onChange={(e) => handleInputChange(e, 'cat2')}
              placeholder="Enter additional info"
              className="vfo-text-box"
            />
            <button type="button" onClick={() => handleUpdate('cat2')} className="vfo-button">Update</button>
          </div>
          <div className="vfo-container">
            <div className="vfo-image-box">
              {images.cat3 && <img src={images.cat3} alt="Category 3" className="vfo-image-preview" />}
            </div>
            <input
              type="file"
              id="cat3"
              onChange={(e) => handleFileChange(e, 'cat3')}
              className="vfo-text-box"
            />
            <input
              type="text"
              value={inputValues.cat3}
              onChange={(e) => handleInputChange(e, 'cat3')}
              placeholder="Enter additional info"
              className="vfo-text-box"
            />
            <button type="button" onClick={() => handleUpdate('cat3')} className="vfo-button">Update</button>
          </div>
        </div>
      </div>

      <div className="vfo-containers">
        <h2 className="vfo-heading">Premium Collection Images</h2>
        <div className="vfo-container1">
          <div className="vfo-container">
            <div className="vfo-image-box">
              {images.cat4 && <img src={images.cat4} alt="Category 4" className="vfo-image-preview" />}
            </div>
            <input
              type="file"
              id="cat4"
              onChange={(e) => handleFileChange(e, 'cat4')}
              className="vfo-text-box"
            />
            <input
              type="text"
              value={inputValues.cat4}
              onChange={(e) => handleInputChange(e, 'cat4')}
              placeholder="Enter additional info"
              className="vfo-text-box"
            />
            <button type="button" onClick={() => handleUpdate('cat4')} className="vfo-button">Update</button>
          </div>
          <div className="vfo-container">
            <div className="vfo-image-box">
              {images.cat5 && <img src={images.cat5} alt="Category 5" className="vfo-image-preview" />}
            </div>
            <input
              type="file"
              id="cat5"
              onChange={(e) => handleFileChange(e, 'cat5')}
              className="vfo-text-box"
            />
            <input
              type="text"
              value={inputValues.cat5}
              onChange={(e) => handleInputChange(e, 'cat5')}
              placeholder="Enter additional info"
              className="vfo-text-box"
            />
            <button type="button" onClick={() => handleUpdate('cat5')} className="vfo-button">Update</button>
          </div>
          <div className="vfo-container">
            <div className="vfo-image-box">
              {images.cat6 && <img src={images.cat6} alt="Category 6" className="vfo-image-preview" />}
            </div>
            <input
              type="file"
              id="cat6"
              onChange={(e) => handleFileChange(e, 'cat6')}
              className="vfo-text-box"
            />
            <input
              type="text"
              value={inputValues.cat6}
              onChange={(e) => handleInputChange(e, 'cat6')}
              placeholder="Enter additional info"
              className="vfo-text-box"
            />
            <button type="button" onClick={() => handleUpdate('cat6')} className="vfo-button">Update</button>
          </div>
          <div className="vfo-container">
            <div className="vfo-image-box">
              {images.cat7 && <img src={images.cat7} alt="Category 7" className="vfo-image-preview" />}
            </div>
            <input
              type="file"
              id="cat7"
              onChange={(e) => handleFileChange(e, 'cat7')}
              className="vfo-text-box"
            />
            <input
              type="text"
              value={inputValues.cat7}
              onChange={(e) => handleInputChange(e, 'cat7')}
              placeholder="Enter additional info"
              className="vfo-text-box"
            />
            <button type="button" onClick={() => handleUpdate('cat7')} className="vfo-button">Update</button>
          </div>
        </div>
      </div>

      {/* Banner Images */}
      <div className="vfo-containers">
        <h2 className="vfo-heading">Banner Images</h2>
        <div className="vfo-container1">
          <div className="vfo-container">
            <div className="vfo-image-box">
              {images.cat8 && <img src={images.cat8} alt="Category 8" className="vfo-image-preview" />}
            </div>
            <input
              type="file"
              id="cat8"
              onChange={(e) => handleFileChange(e, 'cat8')}
              className="vfo-text-box"
            />
            <input
              type="text"
              value={inputValues.cat8}
              onChange={(e) => handleInputChange(e, 'cat8')}
              placeholder="Enter additional info"
              className="vfo-text-box"
            />
            <button type="button" onClick={() => handleUpdate('cat8')} className="vfo-button">Update</button>
          </div>
          <div className="vfo-container">
            <div className="vfo-image-box">
              {images.cat9 && <img src={images.cat9} alt="Category 9" className="vfo-image-preview" />}
            </div>
            <input
              type="file"
              id="cat9"
              onChange={(e) => handleFileChange(e, 'cat9')}
              className="vfo-text-box"
            />
            <input
              type="text"
              value={inputValues.cat9}
              onChange={(e) => handleInputChange(e, 'cat9')}
              placeholder="Enter additional info"
              className="vfo-text-box"
            />
            <button type="button" onClick={() => handleUpdate('cat9')} className="vfo-button">Update</button>
          </div>
        </div>
      </div>

      {message && <div className="vfo-message">{message}</div>}
      {jwtToken && <div className="vfo-jwt-token">JWT Token: {jwtToken}</div>}
    </div>
  );
};

export default UpdateImages;