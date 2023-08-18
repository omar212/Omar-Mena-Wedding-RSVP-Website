// Address.js
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './components.scss'

const Address = ({ location, address, city, actual }) => {
  const handleAddressClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(actual)}`, '_blank');
  };

  return (
    <div className='address-container' onClick={handleAddressClick}>
        <div className="component-title">Address</div>
        <div className="component-text">
            {/* <FaMapMarkerAlt className="map-icon" />  */}
            <div>
              <p>{location}</p>
              <p>{address}</p>
              <p>{city}</p>
            </div>
        </div>
    </div>
  );
};

export default Address;
