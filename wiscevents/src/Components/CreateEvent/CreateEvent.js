import React, { useState } from 'react';
import './CreateEvent.css'; // Create a CSS file for your component
import blankimage from '../../images/blank-image.png'

function CreateEvent() {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [cost, setCost] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState('');
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const clearInputFields = () => {
    setImage(null);
    setLocation('');
    setCost('');
    setDescription('');
    setUser('');
  };

  const createEvent = () => {
    const id = events.length + 1;
    const event = {
      image,
      location,
      cost,
      description,
      user,
      id: id.toString(),
    };

    setEvents([...events, event]);
    clearInputFields(); // Clear input fields and image after creating the event
  };

  const displayEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="create-event">
      <div className="left-column">
        <div className="image-and-description">
        <h2>Event Details</h2>
          <label htmlFor="imageUpload" className="custom-file-upload">
            <img
              src={image || blankimage}
              alt="Event Image"
              className="event-image"
              id="imagePreview"
            />
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </label>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="auto-expand-textarea"
          />
        </div>
      </div>
      <div className="event-input">
  <input
    type="text"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    placeholder="Location"
  />
</div>
<div className="event-input">
  <input
    type="text"
    value={cost}
    onChange={(e) => setCost(e.target.value)}
    placeholder="Cost"
  />
</div>
<div className="event-input">
  <input
    type="text"
    value={user}
    onChange={(e) => setUser(e.target.value)}
    placeholder="User"
  />
</div>

      <button onClick={createEvent} className="create-button">
        Create Event
      </button>

      {events.map((event, index) => (
        <div key={index} className="event-item">
          <button onClick={() => displayEvent(event)}>Display Event Details</button>
        </div>
      ))}

      {selectedEvent && (
        <div className="selected-event">
          <h2>Selected Event Details</h2>
          <p>Event Image:</p>
<img src={selectedEvent.image} alt="Event Image" className="event-image" />

          <p>Location: {selectedEvent.location}</p>
          <p>Cost: {selectedEvent.cost}</p>
          <p>Description: {selectedEvent.description}</p>
          <p>User: {selectedEvent.user}</p>
          <p>Event ID: {selectedEvent.id}</p>
        </div>
      )}
    </div>
  );
}

export default CreateEvent;
