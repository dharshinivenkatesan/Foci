import React from 'react';

const LockScreen = () => {
  return (
    <div className="lock-screen">
      <div className="time-display">
        <h2>Time Left: 25:00</h2>
      </div>
      <button className="unlock-button">
        Unlock (-5 points)
      </button>
    </div>
  );
};

export default LockScreen;
