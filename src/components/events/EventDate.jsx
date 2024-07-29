import React from 'react';

const EventDate = ({ date }) => {
  const formatDate = (dateString) => {
    // Split the date string to extract day, month, and year
    const [day, month, year] = dateString.split('/');

    // Create a new Date object using the extracted parts
    const dateObject = new Date(`${year}-${month}-${day}`);

    // Define options for the date format
    const options = { day: 'numeric', month: 'short', year: 'numeric' };

    // Format the date object to the desired format
    return dateObject.toLocaleDateString('en-GB', options);
  };

  return <span>{formatDate(date)}</span>;
};

export default EventDate;
