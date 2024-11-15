import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  // State to track which tab is active ('description' or 'reviews')
  const [activeTab, setActiveTab] = useState('description');

  // Toggle the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-nav-box ${activeTab === 'description' ? '' : 'fade'}`}
          onClick={() => handleTabClick('description')}
        >
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? '' : 'fade'}`}
          onClick={() => handleTabClick('reviews')}
        >
          Reviews (3)
        </div>
      </div>

      <div className="descriptionbox-description">
        {activeTab === 'description' && (
          <div>
            <h3>Product Description</h3>
            <p>
              This is an amazing product that helps you with various tasks. It's designed with cutting-edge technology to offer you the best experience.
            </p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <h3>Customer Reviews</h3>
            <p>Check out what our customers have to say:</p>
            <ul>
              <li>"Great product! Highly recommend." - Sarah M.</li>
              <li>"The quality is fantastic and the features are top-notch." - John D.</li>
              <li>"Totally changed the way I work. Love it!" - Emily A.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
