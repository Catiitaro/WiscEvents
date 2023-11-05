// Explore.js
import React, { useState } from 'react';
import './Explore.css';
import cheesehacks from '../../images/CheeseHacks.jpg'
import madhacks from '../../images/madhacks.avif'

function Explore() {
  const [events, setEvents] = useState([
    // Sample event data
    {
      id: 1,
      title: 'CheeseHacks Hackathon',
      image: cheesehacks,
      description: 'This is a hackathon!',
    },
    {
      id: 2,
      title: 'MadHacks Hackathon',
      image: madhacks,
      description: 'This is also a hackathon.',
    },
    // Add more event data here
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="explore">
      <h1>Explore Events</h1>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-item" onClick={() => handleEventClick(event)}>
            <img src={event.image} alt={event.title} className="event-image" />
            <p className="event-title">{event.title}</p>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <div className="event-popup">
          <div className="popup-content">
            <img src={selectedEvent.image} alt={selectedEvent.title} />
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.description}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Explore;
