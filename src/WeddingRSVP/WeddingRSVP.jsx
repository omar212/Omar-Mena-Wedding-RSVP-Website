// KatbRSVP.jsx
import React from 'react';
import HostedBy from '../Components/HostedBy';
import DateComponent from '../Components/DateComponent';
import Address from '../Components/Address';
import Title from '../Components/Title';
import Attendance from '../Components/Attendance';
import fancyline2 from '../assets/fancyline2.png';
import './WeddingRSVP.scss'; // Import your global styles here

const WeddingRSVP = () => {
  return (
    <div className="full-container wedding-component">
      <div className="component-container vertical">
          <Title title="Omar & Mena Wedding" />
          <Attendance />
        </div>
      <div className="component-container">
        <div className="component">
          <HostedBy title="Hosted By" name="Elnagdy and Elkafafi Family" />
        </div>
        <div className="component">
          <DateComponent title="Date" dateTitle="Sunday, January 21st 2024" time="5:00PM" dateText="Sunday, January 21st, 2024" date="2024-01-21" startTime="17:00" endTime="23:00" />
        </div>
        <div className="component">
          <Address title="Address" location='The Tides Estate' address="1245 Belmont Ave" city='North Haledon, NJ 07508' actual='The Tides Estate, 1245 Belmont Ave, North Haledon, NJ 07508'/>
        </div>
      </div>
      {/* <div className='image-container'>
        <img src={fancyline2} alt="fancy line" className="fancy-line-image" />
      </div> */}
    </div>
  );
};

export default WeddingRSVP;
