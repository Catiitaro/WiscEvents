import React, { useState, useRef } from 'react';
import './CreateEvent.css'; // Create a CSS file for your component
import ShittyButton from '../ShittyButton/ShittyButton';
import {Navigate, useNavigate} from 'react-router-dom'
import ls from 'local-storage'
function CreateEvent(props) {
  
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
    props.setImage(imageUrl);
  };

  const clearInputFields = () => {
    props.setImage(null);
    props.setLocation('');
    props.setCost('');
    props.setDescription('');
  };

  const createEvent = () => {
    const id = props.events.length + 1;
    console.log("creating " + id)
    const event = {
      image:props.image,
      location:props.location,
      cost:props.cost,
      description:props.description,
      id: id,
    };

    var res = [...props.events, event]
    props.setEvents(res);
    ls.set("events", res);
    console.log(ls.get("events"))
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
          <img src={props.image} className="event-image" />
          <label>Description:</label>
          <textarea
            value={props.description}
            onChange={(e) => props.setDescription(e.target.value)}
            className="auto-expand-textarea"
          />
        </div>
      </div>
      <div className="event-input">
  <input
    type="text"
    value={props.location}
    onChange={(e) => props.setLocation(e.target.value)}
    placeholder="Location"
  />
</div>
<div className="event-input">
  <input
    type="text"
    value={props.cost}
    onChange={(e) => props.setCost(e.target.value)}
    placeholder="Cost"
  />
</div>


      <button onClick={createEvent} className="create-button">
        Create Event
      </button>

      

      
    </div>
  );
}

export default CreateEvent;
