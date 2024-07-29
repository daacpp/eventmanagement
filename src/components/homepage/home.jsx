import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import './home.css';
import TestimonialSlider from './Slider';

function Home() {
  const { name } = useSelector((state) => state.user);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events where trend is 1
    axios.get('http://localhost:3001/events?trend=1')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        toast.error('Error fetching events. Please try again later.');
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-img"></div>
      <h2 className='head-1'>Upcoming Events</h2>
      <div className="event-100-1">
        <div className="event-80-1">
          {events.map((event) => (
            <div key={event.id} className="event-card-1">
              <div className="event-img-">
                {/* Display an image if available */}
                {event.image && <img className='event-card-img-1' src={event.image} width={300} height={210} alt={event.name} />}
              </div>
              <div className="event-title-1">
                <h5>{event.name}</h5>
              </div>
              <div className="event-details-1">
                <div className="event-detail-value-1">
                  <span><b>Place</b></span>
                  <span>{event.place}</span>
                </div>
                <div className="event-detail-value-1">
                  <span><b>Date</b></span>
                  <span>{event.date}</span>
                </div>
                <div className="event-detail-value-1">
                  <span><b>Organizer</b></span>
                  <span>{event.organizer}</span>
                </div>
                <div className="event-detail-value-1">
                  <span><b>Location</b></span>
                  <span>{event.location}</span>
                </div>
                <a href={`/events/${event.id}`}>
                  <button type="button" className="btn btn-primary">View Event</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TestimonialSlider></TestimonialSlider>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default Home;
