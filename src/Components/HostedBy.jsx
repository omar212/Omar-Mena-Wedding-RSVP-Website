/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useReward } from 'react-rewards';
import './components.scss';

const HostedBy = ({ name }) => {
  const { reward: emojiReward } = useReward('emojiReward', 'emoji', {
    lifetime: 300,
    angle: 90,
    decay: 0.89,
    spread: 150,
    zIndex: 9999,
    startVelocity: 120,
    elementCount: 300,
    springAnimation: true,
    type: 'emoji',
    emoji: ['💜','🤍','💍','👰🏽‍♀️','💸'],
  });

  const triggerEmojiReward = () => {
    emojiReward(); // Trigger the emoji reward animation
  };

  // Use useEffect to trigger the emojiReward when the component mounts
  useEffect(() => {
    triggerEmojiReward();
  }, []);

  return (
    <div className='hosted-by-container'>
      <div className="component-title">Hosted By</div>
      <div
        className="component-text"
        style={{ width: '100%', height: '100%' }}
        id="emojiReward"
        onClick={triggerEmojiReward}
      >
        <div className='underline'>
          {name}
        </div>
      </div>
    </div>
  );
};

export default HostedBy;
