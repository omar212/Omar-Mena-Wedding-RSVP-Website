// HostedBy.js
import React from 'react';
import './components.scss'

const HostedBy = ({ name }) => {
  return (
    <div>
        <div className="component-title">Hosted By</div>
        <div className="component-text">{name}</div>
    </div>
  ) 
};

export default HostedBy;
