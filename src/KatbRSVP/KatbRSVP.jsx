// KatbRSVP.jsx
import React from 'react';
import HostedBy from '../Components/HostedBy';
import DateComponent from '../Components/DateComponent';
import Address from '../Components/Address';
import Title from '../Components/Title';
import Attendance from '../Components/Attendance';
import './Katb.css'; // Import your global styles here

const KatbRSVP = () => {
  return (
    <div className="full-container katb-component">
      <div className="component-container vertical">
          <Title title="Omar & Mena Katb Kitab" />
          <Attendance />
        </div>
      <div className="component-container">
        <div className="component">
          <HostedBy title="Hosted By" name="Elnagdy and Elkafafi Family" />
        </div>
        <div className="component">
          <DateComponent title="Date" dateText="Saturday January 6th, 2024 " date="2024-01-06" startTime="17:00" endTime="23:00" />
        </div>
        <div className="component">
          <Address title="Address" address="Miraj Islamic School" />
        </div>
      </div>
    </div>
  );
};

export default KatbRSVP;
