/* eslint-disable react/prop-types */
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import './components.scss';


const DateComponent = ({ dateTitle, time, startTime, endTime }) => {

  const reminder = {
    method: 'popup', // Use 'popup' for a popup reminder
    weeks: 1, // Set the reminder to trigger 1 week before the event
  };

  return (
    <div className='date-container'>
      <div className="component-title">Date</div>
      <div className="component-text custom-date">
        <p className='underline'>{dateTitle}</p>
        <br />
        <p className='underline'>{time}</p>
      </div>
      <AddToCalendarButton
         name="Omar's & Mena's Wedding"
         startDate="2024-01-21"
         startTime={startTime}
         endTime={endTime}
         timeZone="America/New_York"
         location="The Tides Estate 1245 Belmont Ave, North Haledon, NJ 07508"
         description="Omar & Mena's Wedding" 
         options="'Apple','Google','iCal','Outlook.com'"
         label="Add to Calendar"
         iCalFileName="Reminder-Event"
         lightMode="bodyScheme"
         alarm={reminder}
         rsvp={true}
      />
    </div>
  );
};

export default DateComponent;

