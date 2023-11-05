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
          <ul className="feature-list">
            <li>Discover a diverse range of local events</li>
            <li>From cultural festivals to sports tournaments</li>
            <li>Tech meetups to art exhibitions</li>
            <li>Opportunities to engage with your community</li>
            <li>Networking, entertainment, learning, and fun</li>
          </ul>
        </div>
        <div className="feature">
          <h2>Create Events</h2>
          <p>Become an event organizer and bring your unique ideas to life by hosting events that reflect your passions and goals.
            Showcase your creativity and expertise by curating events that resonate with your community, whether it's a charity run, an art workshop, or a tech conference.
            Share your events with a wide audience, attracting attendees who share your enthusiasm and want to participate in the experiences you create.
            Our platform provides you with the tools and support you need to plan and promote your events, ensuring that your initiatives receive the attention they deserve.
            By hosting events, you contribute to building a vibrant and interconnected community, where people can come together to learn, collaborate, and enjoy shared interests.</p>
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
        <p>&copy; 2023 CheeseHacks </p>
      </footer>
    </div>
  );
}

export default Home;
