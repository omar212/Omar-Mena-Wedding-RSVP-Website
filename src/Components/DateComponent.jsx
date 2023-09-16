import React from 'react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import './components.scss'

const DateComponent = ({ dateTitle, time, dateText, date, startTime, endTime }) => {
  console.log({dateTitle, time, dateText, date, startTime, endTime})
  return (
    <div className='date-container'>
        <div className="component-title">Date</div>
        <div className="component-text custom-date">
          <p className='underline'>{dateTitle}</p>
          <br />
          <p className='underline'>{time}</p>
        </div>
        <AddToCalendarButton
          name="Omar & Mena's Wedding"
          startDate={date}
          startTime={startTime}
          endTime={endTime}
          options={['Google','iCal', 'Outlook.com']}
          className="component-text"
          />
    </div>
  );
};

export default DateComponent;