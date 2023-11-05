import React from 'react';
import person1Image from '../../images/person1.jpeg';
import person2Image from '../../images/person2.jpeg';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1>Welcome to Your Next Event Website</h1>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Explore Events</h2>
          <p className="subtext">
            Discover a diverse range of local events, from cultural festivals to sports tournaments, and from tech meetups to art exhibitions. Explore opportunities to engage with your community for networking, entertainment, learning, and fun.
          </p>
        </div>
        <div className="feature">
          <h2>Create Events</h2>
          <p className="subtext">
            Become an event organizer to bring your unique ideas to life. Showcase your creativity and expertise by curating community-focused events, whether it's a charity run, an art workshop, or a tech conference. Share your events with a wide audience to attract enthusiastic participants. Receive tools and support for planning and promoting events.
          </p>
        </div>
      </section>
      <h2>What People Are Saying</h2>
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
        <p>&copy; 2023 CheeseHacks</p>
      </footer>
    </div>
  );
}

export default Home;
