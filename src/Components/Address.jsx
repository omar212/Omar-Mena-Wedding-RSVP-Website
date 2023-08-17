// Address.js
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './components.scss'

const Address = ({ address }) => {
  const handleAddressClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <div onClick={handleAddressClick}>
        <div className="component-title">Address</div>
        <div className="component-text">
            <FaMapMarkerAlt className="map-icon" /> {address}
        </div>
    </div>
  );
};

export default Address;
