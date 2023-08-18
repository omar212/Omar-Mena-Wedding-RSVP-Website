import React, { useState, useEffect } from 'react';
import Invitation from '../assets/Invitation.png'
import './WeddingInvitation.scss'; // Import the corresponding CSS file for styling

const WeddingInvitation = () => {
  const [showInvitation, setShowInvitation] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay (e.g., 1 second)
    const animationTimeout = setTimeout(() => {
      setShowInvitation(true);
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className={`invitation-container ${showInvitation ? 'show' : ''}`}>
      <img
        src={Invitation}
        alt="Wedding Invitation"
        className="invitation-image"
      />
    </div>
  );
};

export default WeddingInvitation;
