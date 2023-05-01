import React, { useState } from 'react';
// import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Planner() {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [activities, setActivities] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <div className='planner-container'>
        <Link className='brand-name text-4xl font-bold text-blue-800' href="/Profile">EZ</Link>
      <h1 className='planner-heading' >Travel Planner</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="destination">Destination</label>
        <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} />

        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

        <label htmlFor="activities">Activities</label>
        <textarea id="activities" value={activities} onChange={(e) => setActivities(e.target.value)}></textarea>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Planner;