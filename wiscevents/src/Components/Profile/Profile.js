import React from 'react';
import ls from 'local-storage';
import { Navigate } from 'react-router-dom';
import madhacks from '../../images/madhacks.avif';
import cheesehacks from '../../images/CheeseHacks.jpg';
import './Profile.css';

function createAnchor(props, text) {
  return <a {...props}>{text}</a>;
}

function createEvent(event) {
  return (
    <div key={event.id} className="event">
      <a href={'/events/' + event.id}>
        <div className="event-image">
          <img src={event.image} alt={event.title} />
        </div>
        <div className="event-details">
          <h3>{event.title}</h3>
          <p className="event-description" dangerouslySetInnerHTML={{ __html: event.description }}></p>
        </div>
      </a>
    </div>
  );
}

export default function Profile(props) {
  function handleSignOut() {
    props.setUser({});
    ls.set('user', {});
    props.setAuthenticated(false);
    ls.set('isAuthenticated', false);
    ls.set('events', [
      {
        id: 1,
        title: 'CheeseHacks Hackathon',
        image: cheesehacks,
        description: '<a href="https://cheesehacks.webdevuw.org">This is a hackathon!</a>',
        time: '01:00:PM',
        date: '11-04-2023',
        cost: 'one day of your life'
      },
      {
        id: 2,
        title: 'MadHacks Hackathon',
        image: madhacks,
        description: '<a href="https://www.madhacks.io">This is also a hackathon.</a>',
        time: '01:00:PM',
        date: '11-11-2023',
        cost: '$0.00'
      },
    ]);
  }

  if (ls.get('isAuthenticated')) {
    return (
      <div className="profile">
        <button onClick={handleSignOut} className="sign-out-button">
          Sign Out
        </button>
        <div className="user-profile">
          <div className="user-info">
            <img src={props.user.picture} alt="User Profile" />
            <h2>{props.user.name}</h2>
            <p>Email: {props.user.email}</p>
          </div>
          <div className="user-events">
            <h2>Your Events</h2>
            {ls.get('events').map((event) => createEvent(event))}
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" replace={true} />;
  }
}
