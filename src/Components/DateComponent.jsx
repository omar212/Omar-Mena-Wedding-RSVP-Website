import React from 'react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import './components.scss'

const DateComponent = ({ dateTitle, time, dateText, date, startTime, endTime }) => {

  return (
    <div className='date-container'>
        <div className="component-title">Date</div>
        <div className="component-text">
          <p>{dateTitle}</p>
          <p>{time}</p>
        </div>
        <AddToCalendarButton
          name="Omar & Mena Katb Kitab"
          startDate={date}
          startTime={startTime}
          endTime={endTime}
          options={['Apple','Google','Yahoo','iCal']}
          className="component-text"
          />
    </div>
  );
};

export default DateComponent;