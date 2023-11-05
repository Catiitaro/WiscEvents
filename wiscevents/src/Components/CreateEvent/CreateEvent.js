// React Component (EventForm.js)

import React, { useState } from 'react';

function EventForm() {
  const [events, setEvents] = useState([]);
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [cost, setCost] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState('');
  const [id, setId] = useState('');

  const createEvent = () => {
    const newEvent = {
      image,
      location,
      cost,
      description,
      user,
      id,
    };

    setEvents([...events, newEvent]);

    // Clear input fields after creating the event
    setImage('');
    setLocation('');
    setCost('');
    setDescription('');
    setUser('');
    setId('');
  };

  const displayEvent = (event) => {
    console.log('Event Image:', event.image);
    console.log('Location:', event.location);
    console.log('Cost:', event.cost);
    console.log('Description:', event.description);
    console.log('User:', event.user);
    console.log('Event ID:', event.id);
    console.log('\n');
  };

  return (
    <div>
      <h1>Create Event</h1>
      <div>
        <label>Image:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div>
        <label>Cost:</label>
        <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>User:</label>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
      </div>
      <div>
        <label>ID:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <button onClick={createEvent}>Create Event</button>

      <h2>Event Details</h2>
      {events.map((event, index) => (
        <div key={index}>
          <button onClick={() => displayEvent(event)}>Display Event Details</button>
        </div>
      ))}
    </div>
  );
}

export default EventForm;
