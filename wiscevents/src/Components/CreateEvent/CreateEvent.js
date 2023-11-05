import React, { useState, useRef } from 'react';
import './CreateEvent.css'; // Create a CSS file for your component
import ShittyButton from '../ShittyButton/ShittyButton';
import {Navigate, useNavigate} from 'react-router-dom'
import ls from 'local-storage'
function CreateEvent(props) {
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('2023-11-05');
    const [time, setTime] = useState('');

console.log(props)
  const hiddenFileInput = useRef(null); // ADDED

  const navigater = useNavigate()
  const redirectEvents = (id) => {
    console.log(id);
    navigater('/events/'+id)
  };
  const handleClick = event => {
    hiddenFileInput.current.click();    // ADDED
  };

  const handleImageUpload = (e) => {
    if (e.target.files.length < 1) return;
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const clearInputFields = () => {
    setImage(null);
    setLocation('');
    setCost('');
    setDescription('');
  };

  const createEvent = () => {
    const id = props.events.length+1;
    console.log("creating " + id)
    const event = {
      image:image,
      location:location,
      cost:cost,
      description:description,
      id: id,
      title: title,
      time: time,
      date: date,
      cost: cost
    };

    var res = [...props.events, event]
    props.setEvents(res);
    ls.set("events", res)
    clearInputFields(); // Clear input fields and image after creating the event

    redirectEvents(id);
  };


  return (
    <div className="create-event">
      <div className="left-column">
        <div className="image-and-description">
        <h2>Event Details</h2>
          <label htmlFor="imageUpload" className="custom-file-upload">
            <ShittyButton name="Upload Image" onClick={handleClick} />
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              ref={hiddenFileInput}
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </label>
          <img src={image} className="event-image" />
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            
            />
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="auto-expand-textarea"
          />
        </div>
      </div>
      <label>Location:</label>
      <div className="event-input">
  <input
    type="text"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  />
</div>
<label>Date:</label>
<input
    type="date"
    value={date} id="date-selecter" min="2018-01-01"
    onChange={(e) => setDate(e.target.value)}
  />
  <label>Time:</label>
<input
    type="time"
    value={time} id="time-selecter" 
    onChange={(e) => setTime(e.target.value)} 
  />
  <label>Cost:</label>
<div className="event-input">
  <input
    type="text"
    value={cost}
    onChange={(e) => setCost(e.target.value)}
  />
</div>


      <ShittyButton onClick={createEvent} name="Create Event">
        Create Event
      </ShittyButton>

      

      
    </div>
  );
}

export default CreateEvent;
