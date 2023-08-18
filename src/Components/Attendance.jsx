import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Typography, IconButton, Grid  } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import './components.scss';
import emailjs from 'emailjs-com';

const AttendanceComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guests, setGuests] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [privateMessage, setPrivateMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);


  const openDialog = () => {
    // Clear existing guest list and reset input fields
    setGuests([]);
    setGuestName('');
    setPhoneNumber('');
    setPrivateMessage('');
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleRSVPSubmit = () => {
    const serviceId = "service_3o28gwi";
    const templateId = "template_ozdm3l9";
    const userId = "6dq3cOnzFTDbaZOC7";

    const templateParams = {
      guestName: guests.join(', '),
      numPeople: guests.length,
      phoneNumber: phoneNumber, // Add the phone number field
      privateMessage: privateMessage, // Add the private message field
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setEmailSent(true);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  const handleAddGuest = () => {
    if (guestName.trim() !== '') {
      setGuests([...guests, guestName.trim()]);
      setGuestName('');
    }
  };

  const handleRemoveGuest = (index) => {
    const updatedGuests = [...guests];
    updatedGuests.splice(index, 1);
    setGuests(updatedGuests);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the RSVP submission function here
    handleRSVPSubmit();
    closeDialog();
  };


  const isSubmitDisabled = guests.length === 0;
  

  return (
    <div className='attendance-component'>
      <div className='button-container'>
        <button className='attend-button' onClick={openDialog}>
          Will Attend
        </button>
        <button className='not-attend-button' onClick={openDialog}>
          Will Not Attend
        </button>
      </div>
      <Dialog className='modal' open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>RSVP</DialogTitle>
        <DialogContent>
        <Grid container justifyContent="center">
          <Grid>
            <div className="form">
              <TextField
                label="Guest Name"
                variant="outlined"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                fullWidth
                className="input"
              />
              <Button style={{backgroundColor: "green"}}className="add-button" variant="contained" onClick={handleAddGuest} fullWidth>
                Add Guest
              </Button>
              <div className="guest-list">
                {guests.map((guest, index) => (
                  <div key={index} className="guest-item">
                    <Typography variant="body1">{guest}</Typography>
                    <IconButton
                      aria-label="remove"
                      color="secondary"
                      onClick={() => handleRemoveGuest(index)}
                    >
                      <DeleteIcon style={{fill: "red"}}/>
                    </IconButton>
                  </div>
                ))}
              </div>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="input"
              />

              <TextField
                label="Private Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={privateMessage}
                onChange={(e) => setPrivateMessage(e.target.value)}
                className="input"
              />

            </div>
          </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={isSubmitDisabled} variant='contained'>
            Submit RSVP
          </Button>
        </DialogActions>
      </Dialog>
      {emailSent && <p>RSVP submitted successfully!</p>}
    </div>
  );
};

export default AttendanceComponent;
