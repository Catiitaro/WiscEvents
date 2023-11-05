// Home.js
import React from 'react';
import person1Image from '../../images/person1.jpeg';
import person2Image from '../../images/person2.jpeg';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1>Welcome to Your Next Event Website</h1>
        <p>Discover and create events in your area.</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Explore Events</h2>
          <p>Find a variety of events happening near you.</p>
        </div>
        <div className="feature">
          <h2>Create Events</h2>
          <p>Host your own events and share them with the community.</p>
        </div>
        <h2>What People Are Saying</h2>
      </section>
      <section className="testimonials">
        <div className="testimonial">
          <img src={person1Image} alt="Person 1" />
          <p>"I found amazing events through this website. Highly recommended!"</p>
          <p>- Jackson Melon</p>
        </div>
        <div className="testimonial">
          <img src={person2Image} alt="Person 2" />
          <p>"This platform made organizing events a breeze. Thanks for the great service!"</p>
          <p>- Benjamin Davis</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 CheeseHacks </p>
      </footer>
    </div>
  );
}

export default Home;
