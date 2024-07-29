import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const EventRegister = () => {
  let { eventId } = useParams(); // Extract eventId from the URL parameters
  const { name } = useSelector((state) => state.user); // Access user data from Redux
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    businessName: '',
    organizationName: '',
    businessAddress: '',
    city: '',
    state: '',
    zipcode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      navigate('/login');
      return;
    }

    const userIdString = localStorage.getItem('userId'); // Get userId from localStorage
    const userId = parseInt(userIdString, 10); // Convert userId to an integer
    eventId= parseInt(eventId, 10);
    if (!userId) {
      toast.error('User not logged in. Please log in.');
      navigate('/login');
      return;
    }


    const data = { ...formData, userId, eventId }; // Include userId and eventId in the data sent to the server

    console.log('Data sent to server:', data); // Log data to verify eventId inclusion

    try {
      const response = await axios.post('http://localhost:3001/event_register', data);

      if (response.status === 200 || response.status === 201) {
        toast.success('Registration successful!');
        navigate('/');
      } else {
        toast.error('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting registration:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 form-div">
        <form style={{ width: '30rem' }} onSubmit={handleSubmit}>
          <h1>Event Registration</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="firstName">First Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="lastName">Last Name</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="email">Email</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <input
                  type="number"
                  id="age"
                  className="form-control"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="age">Age</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="businessName"
                  className="form-control"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="businessName">Business Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="organizationName"
                  className="form-control"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="organizationName">Organization Name</label>
              </div>
            </div>
          </div>
          <div className="form-outline mb-4">
            <textarea
              id="businessAddress"
              className="form-control"
              rows={4}
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              required
            />
            <label className="form-label" htmlFor="businessAddress">Business Address</label>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="city">City</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="state"
                  className="form-control"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="state">State</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="zipcode"
                  className="form-control"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="zipcode">Zipcode</label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>
        </form>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default EventRegister;
