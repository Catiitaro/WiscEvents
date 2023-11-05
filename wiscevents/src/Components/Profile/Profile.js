import React from 'react';
import ls from 'local-storage';
import { Navigate } from 'react-router-dom';
import madhacks from '../../images/madhacks.avif';
import cheesehacks from '../../images/CheeseHacks.jpg';
import './Profile.css';

function createAnchor(props, text) {
  return React.createElement('a', props, text);
}

function createEvent(event) {
    return (
    <div key={event.id} className="event">
        <div className="event-image">
            <img src={event.image} alt={event.title}/>
        </div>
        <div className="event-details">
            <h3>{event.title}</h3>
            <p className="event-description" dangerouslySetInnerHTML={{__html: event.description}}></p>
        </div>
    </div>)
  /*return React.createElement('div', { key: event.id, className: 'event' },
    React.createElement('div', { className: 'event-image' },
      React.createElement('img', { src: event.image, alt: event.title })
    ),
    React.createElement('div', { className: 'event-details' },
      React.createElement('h3', null, event.title),
      React.createElement('p', { className: 'event-description' }, createAnchor({ href: event.description.props.href }, event.description.props.children))
    )
  );*/
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
      },
      {
        id: 2,
        title: 'MadHacks Hackathon',
        image: madhacks,
        description: '<a href="https://www.madhacks.io">This is also a hackathon.</a>',
      },
    ]);
  }

  if (ls.get('isAuthenticated')) {
    return React.createElement('div', { className: 'profile' },
      React.createElement('button', { onClick: handleSignOut, className: 'sign-out-button' }, 'Sign Out'),
      React.createElement('div', { className: 'user-profile' },
        React.createElement('div', { className: 'user-info' },
          React.createElement('img', { src: props.user.picture, alt: 'User Profile' }),
          React.createElement('h2', null, props.user.name),
          React.createElement('p', null, 'Email: ', props.user.email)
        ),
        React.createElement('div', { className: 'user-events' },
          React.createElement('h2', null, 'Your Events'),
          ...ls.get('events').map((event) => createEvent(event))
        )
      )
    );
  } else {
    return React.createElement(Navigate, { to: '/', replace: true });
  }
}
