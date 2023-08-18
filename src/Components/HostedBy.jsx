import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './components.scss';

const HostedBy = ({ name }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000); // Clear confetti after 3 seconds
  };

  return (
    <div className='hosted-by-container'>
      {showConfetti && <Confetti />}
      <div className="component-title">Hosted By</div>
      <div className="component-text" onClick={handleClick}>
        {name}
      </div>
    </div>
  );
};

export default HostedBy;
