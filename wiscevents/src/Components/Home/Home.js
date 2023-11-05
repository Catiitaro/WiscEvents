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
          <p>Explore a diverse range of events right in your local area, from cultural festivals to sports tournaments, and from tech meetups to art exhibitions.
Discover a multitude of opportunities to engage with your community and fellow enthusiasts, whether you're interested in networking, entertainment, learning, or simply having fun.
Stay informed about the latest happenings in your vicinity, ensuring you never miss out on exciting local experiences and gatherings.
With our platform, you have access to a rich selection of events that cater to different tastes and interests, making it easier than ever to find the perfect event to attend.</p>
        </div>
        <div className="feature">
          <h2>Create Events</h2>
          <p>Become an event organizer and bring your unique ideas to life by hosting events that reflect your passions and goals.
Showcase your creativity and expertise by curating events that resonate with your community, whether it's a charity run, an art workshop, or a tech conference.
Share your events with a wide audience, attracting attendees who share your enthusiasm and want to participate in the experiences you create.
Our platform provides you with the tools and support you need to plan and promote your events, ensuring that your initiatives receive the attention they deserve.
By hosting events, you contribute to building a vibrant and interconnected community, where people can come together to learn, collaborate, and enjoy shared interests.</p>
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
