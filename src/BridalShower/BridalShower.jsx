// KatbRSVP.jsx
import React from 'react';
import HostedBy from '../Components/HostedBy';
import DateComponent from '../Components/DateComponent';
import Address from '../Components/Address';
import Title from '../Components/Title';
import Attendance from '../Components/Attendance';
import './BridalShower.scss'; // Import your global styles here

const BridalShowerRSVP = () => {
  return (
    <div className="full-container bridal-shower-component">
      <div className="component-container vertical">
          <Title title="Mena's Bridal Shower" />
          <Attendance />
        </div>
      <div className="component-container">
        <div className="component">
          <HostedBy title="Hosted By" name="Elkafafi Family" />
        </div>
        <div className="component">
          <DateComponent title="Date" dateText="Saturday, October 14th, 2023" date="2023-10-14" startTime="15:00" endTime="23:00" />
        </div>
        <div className="component">
          <Address title="Address" address="1420 Drumgoole Road East, Staten Island, 10312" />
        </div>
      </div>
      <hr className="hr-component swiggly-line"/>
    </div>
  );
};

export default BridalShowerRSVP;
