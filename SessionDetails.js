import React from 'react';

const SessionDetails = () => {
  return (
    <div className="session-details">
      <h2>Session Details</h2>
      <div className="time-dropdown">
        <h3>Session Time</h3>
        <p>Placeholder content for session time dropdown.</p>
      </div>
      <div className="points-dropdown">
        <h3>Points</h3>
        <p>Placeholder content for points dropdown.</p>
      </div>
      <div className="penalty-dropdown">
        <h3>Penalty</h3>
        <p>Placeholder content for penalty dropdown.</p>
      </div>
      <div className="members">
        <h3>Session Members</h3>
        <p>Placeholder content for session members.</p>
      </div>
      <button className="send-invite">Send Invite</button>
    </div>
  );
};

export default SessionDetails;
