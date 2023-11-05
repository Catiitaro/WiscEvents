import React from 'react';
import ls from 'local-storage';
import { Navigate } from 'react-router-dom';
import madhacks from '../../images/madhacks.avif';
import cheesehacks from '../../images/CheeseHacks.jpg';
import './Profile.css';
import chess from '../../images/chess.jpg'
import party from '../../images/party.jpg'
import concert from '../../images/concert.jpg'
import fgc from '../../images/fgc.jpg'
import football from '../../images/football.jpg'
import benchpress from '../../images/benchpress.jpg'
import ShittyButton from '../ShittyButton/ShittyButton';

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
    ls.set('events', [{
        id: 1,
        title: 'CheeseHacks Hackathon',
        image: cheesehacks,
        description: '<a href="https://cheesehacks.webdevuw.org">This is a hackathon!</a>',
        time: '01:00 PM',
        date: '11-04-2023',
        cost: 'one day of your life',
        location: 'Educational Sciences'
      },
      {
        id: 2,
        title: 'MadHacks Hackathon',
        image: madhacks,
        description: '<a href="https://www.madhacks.io">This is also a hackathon.</a>',
        time: '01:00 PM',
        date: '11-11-2023',
        cost: 'your sanity',
        location: 'Educational Sciences'
      },
      {
        id: 3,
        title: 'Chess Get Together',
        image: chess,
        description: 'All ratings welcome, just a fun get together. Bring your board and clock!',
        time: '04:00 PM',
        date: '11-13-2023',
        cost: 'free',
        location: 'Park'
      },
      {
        id: 4,
        title: 'Party @ Waters',
        image: party,
        description: 'Just an innocent gathering of college students',
        time: '11:00 PM',
        date: '11-10-2023',
        cost: '$100',
        location: '1111 Bunge @ Waters Residence Hall'
      },
      {
        id: 5,
        title: 'Football Watch Group',
        image: football,
        description: 'Group of people going to watch the game!',
        time: '04:30 PM',
        date: '11-19-2023',
        cost: 'free',
        location: 'Watching in Dejope lobby'
      },
      {
        id: 6,
        title: 'Bench Press Competition',
        image: benchpress,
        description: 'Who has the biggest bench in Lakeshore???',
        time: '08:00 PM',
        date: '11-15-2023',
        cost: 'your chest muscles',
        location: "Bakke"
      },
      {
        id: 7,
        title: 'Fighting Game Club',
        image: fgc,
        description: 'Get together to play fighting games!',
        time: '07:30 PM',
        date: '11-27-2023',
        cost: '$5.00',
        location: 'Union South'
      },
      {
        id: 8,
        title: 'Concert Goers to see Sheku',
        image: concert,
        description: 'Going to watch the famous Sheku Kanneh-Mason',
        time: '07:30 PM',
        date: '11-03-2023',
        cost: '$10.00',
        location: 'Memorial Union'
      },]);
  }

  if (ls.get('isAuthenticated')) {
    return (
      <div className="profile">
        <div className="user-profile">
          <div className="user-info">
            <img src={props.user.picture} alt="User Profile" />
            <h2>{props.user.name}</h2>
            <p>Email: {props.user.email}</p>
            <ShittyButton onClick={handleSignOut} name="Sign Out" />
          </div>
          <div className="user-events">
            <h2>Your Events</h2>
            {ls.get('events').slice(0,2).map((event) => createEvent(event))}
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" replace={true} />;
  }
}
