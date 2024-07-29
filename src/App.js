import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/homepage/home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { ToastContainer } from 'react-toastify';
import Event from './components/events/Events';
import EventDetail from './components/eventdetail/EventDetail';
import Contact from './components/contact/contact';
import EventRegister from './components/eventregister/EventRegister';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import AboutUs from './components/aboutus/Aboutus';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/event-register/:eventId" element={<EventRegister />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/terms-condition" element={<TermsAndConditions />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
      </Routes>

    </Router>
  );
}

export default App;
