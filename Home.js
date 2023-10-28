import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h2>Home Section</h2>
      <div className="squad">
        <h3>Squad Information</h3>
        <p>Placeholder content for the squad.</p>
      </div>
      <div className="goal">
        <h3>Study Goals</h3>
        <p>Placeholder content for study goals.</p>
      </div>
      <div className="leaderboard">
        <h3>Leaderboard</h3>
        <p>Placeholder content for the leaderboard.</p>
      </div>
      <button className="start-session">Start Session</button>
      <button className="schedule-session">Schedule Session</button>
    </div>
  );
};

export default Home;
