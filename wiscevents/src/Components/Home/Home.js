// Home.js
import React from 'react';

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
      </section>
    </div>
  );
}
export default Home;
