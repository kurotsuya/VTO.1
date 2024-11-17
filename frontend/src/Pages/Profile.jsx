import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import dummyProfileImage from '../../src/Components/Assets/user.png'; // Path to your default image

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    password: '********',
  });
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/profile', {
          headers: {
            'auth-token': localStorage.getItem('auth-token'),
          },
        });
        setProfileData({
          name: response.data.user.name,
          email: response.data.user.email,
          password: '********',
        });
        setUpdatedName(response.data.user.name);
        setUpdatedEmail(response.data.user.email);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setMessage('Failed to load profile data');
      }
    };
    fetchProfileData();
  }, []);

  // Update profile (name and email)
  const handleProfileUpdate = async () => {
    try {
      const response = await axios.put(
        'http://localhost:4000/profile/update',
        { name: updatedName, email: updatedEmail },
        {
          headers: {
            'auth-token': localStorage.getItem('auth-token'),
          },
        }
      );
      if (response.data.success) {
        setMessage('Profile updated successfully');
        setProfileData((prevData) => ({
          ...prevData,
          name: updatedName,
          email: updatedEmail,
        }));
      } else {
        setMessage('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Failed to update profile');
    }
  };

  // Reset password
  const handlePasswordReset = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4000/profile/reset-password',
        { oldPassword, newPassword },
        {
          headers: {
            'auth-token': localStorage.getItem('auth-token'),
          },
        }
      );
      if (response.data.success) {
        setMessage('Password reset successful');
      } else {
        setMessage('Failed to reset password');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setMessage('Failed to reset password');
    }
  };

  return (
    <div className="profile">
      <h1>Hello {profileData.name}</h1>
      {message && <p className="profile-message">{message}</p>}

      <div className="profile-image">
        <img src={dummyProfileImage} alt="Profile" className="profile-img" />
      </div>

      <div className="profile-info">
        <p><strong>Name:</strong></p>
        <input
          type="text"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
          placeholder="Enter your name"
        />

        <p><strong>Email:</strong></p>
        <input
          type="email"
          value={updatedEmail}
          onChange={(e) => setUpdatedEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <p><strong>Password:</strong> {profileData.password}</p>
      </div>

      <button className="profile-edit-button" onClick={handleProfileUpdate}>
        Update Profile
      </button>

      <div className="profile-reset">
        <h3>Reset Password</h3>
        <input
          type="password"
          placeholder="Enter old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handlePasswordReset}>Reset Password</button>
      </div>
    </div>
  );
};

export default Profile;
