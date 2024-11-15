import React, { useState, useCallback, useRef, useContext } from 'react';
import Webcam from 'react-webcam';
import './VirtualTry.css';
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';

const VirtualTry = () => {
  const { productId } = useParams(); 
  const [image, setImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const webcamRef = useRef(null);
  const { addToCart, all_product } = useContext(ShopContext);

  const product = all_product.find(p => p.id === Number(productId));

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setIsCameraOpen(false);
  }, [webcamRef]);

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleOpenCamera = () => {
    setIsCameraOpen(true);
  };

  const closeModal = () => {
    setIsCameraOpen(false);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product.id);
      alert('Product added to cart!');
    }
  };

  return (
    <div className="virtual-try-page">
      <div className="virtual-try-container">
        <h1 className="virtual-try-title">Virtual Try-On Experience</h1>
        <p className="virtual-try-description">Upload an image or use your camera to try on products virtually!</p>

        {product && (
          <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} className="preview-image" />
          </div>
        )}

        <div className="image-comparison-container">
          {image && (
            <div className="image-preview">
              <h3 className="preview-title">Your Uploaded Image</h3>
              <img src={image} alt="Preview" className="preview-image" />
            </div>
          )}
          {image && (
            <div className="image-rendered">
              <h3 className="rendered-title">Virtual Try Image</h3>
              <img src="path_to_your_rendered_image" alt="Rendered" className="rendered-image" />
            </div>
          )}
        </div>

        <div className="button-section">
          <button onClick={handleOpenCamera} className="button open-camera-button">Open Camera</button>
          <label htmlFor="file-upload" className="button upload-image-button">Upload Image</label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input"
            style={{ display: 'none' }} 
          />
        </div>

        {isCameraOpen && (
          <div className="camera-modal">
            <div className="camera-overlay" onClick={closeModal}></div>
            <div className="camera-content">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="webcam"
              />
              <div className="camera-actions">
                <button onClick={captureImage} className="btn capture-button">Capture</button>
                <button onClick={closeModal} className="btn close-button">Close</button>
              </div>
            </div>
          </div>
        )}

        <button onClick={handleAddToCart} className="button add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default VirtualTry;
