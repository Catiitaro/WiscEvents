// Explore.js
import React, { useState } from 'react';
import './Explore.css';
import cheesehacks from '../../images/CheeseHacks.jpg'
import madhacks from '../../images/madhacks.avif'

function Explore(props) {
  
    console.log(props)


  return (
    <div className="explore">
      <h1>Explore Events</h1>
      <div className="event-list">
        {props.events.map((event) => (
        <a href={'/events/'+event.id} key={event.id}>
          <div key={event.id} className="event-item" >
            <img src={event.image} alt={event.title} className="event-image" />
            <p className="event-title">{event.title}</p>
          </div>
          </a>
        ))}
      </div>
      
    </div>
  );
}

export default Explore;
