import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Typography, IconButton, Grid } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import './components.scss';
import emailjs from 'emailjs-com';
import GuestList from '../GuestList/GuestList.js'; // Import the GuestList from the separate file

const AttendanceComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mainGuestName, setMainGuestName] = useState('');
  const [additionalGuestNames, setAdditionalGuestNames] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [privateMessage, setPrivateMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [isMainGuestValid, setIsMainGuestValid] = useState(false); // New state for main guest validity

  const openDialog = () => {
    setMainGuestName('');
    setAdditionalGuestNames([]);
    setPhoneNumber('');
    setPrivateMessage('');
    setIsMainGuestValid(false); // Clear main guest validity
    setEmailSent(false);
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
      guestName: [mainGuestName, ...additionalGuestNames].join(', '),
      numPeople: 1 + additionalGuestNames.length,
      phoneNumber: phoneNumber,
      privateMessage: privateMessage,
    };

    // Sending email using emailjs

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
    if (isMainGuestValid && additionalGuestNames.length < GuestList[mainGuestName.toLowerCase()]) {
      setAdditionalGuestNames([...additionalGuestNames, ""]);
    }
  };

  const handleRemoveGuest = (index) => {
    const updatedGuests = [...additionalGuestNames];
    updatedGuests.splice(index, 1);
    setAdditionalGuestNames(updatedGuests);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMainGuestValid) {
      handleRSVPSubmit();
      closeDialog();
    }
  };

  const isSubmitDisabled = mainGuestName === '' || additionalGuestNames.some(name => name.trim() === '');

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
                <div className='verify-main-guest-container'>
                <TextField
                  label="Main Guest Name"
                  placeholder='Enter your first and last name'
                  variant="outlined"
                  value={mainGuestName}
                  onChange={(e) => {
                    const name = e.target.value;
                    setMainGuestName(name);
                    setIsMainGuestValid(GuestList.hasOwnProperty(name.toLowerCase())); // Convert to lowercase
                  }}
                  fullWidth
                  className="input"
                />
                {/* Display the check or X icon based on validity */}
                <div className="verify-main-guest-icon">
                {isMainGuestValid ? <CheckIcon style={{ fill: "green`" }} /> : <ClearIcon style={{ fill: "red" }} />}
                </div>
                </div>
                {isMainGuestValid && (
                  <Typography variant="caption">
                    Allowed Guests: {GuestList[mainGuestName.toLowerCase()]}
                  </Typography>
                )}
                <Button
                  className="add-button"
                  variant="contained"
                  onClick={handleAddGuest}
                  fullWidth
                  disabled={!isMainGuestValid} // Disable if main guest is not valid
                >
                  Add Guest
                </Button>
                <div className="guest-list">
                  {additionalGuestNames.map((guest, index) => (
                    <div key={index} className="guest-item">
                      <TextField
                        label={`Additional Guest #${index + 1}`}
                        variant="outlined"
                        value={guest}
                        onChange={(e) => {
                          const updatedGuests = [...additionalGuestNames];
                          updatedGuests[index] = e.target.value;
                          setAdditionalGuestNames(updatedGuests);
                        }}
                        fullWidth
                        className="input"
                      />
                      <IconButton
                        aria-label="remove"
                        color="secondary"
                        onClick={() => handleRemoveGuest(index)}
                      >
                        <DeleteIcon style={{ fill: "red" }} />
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
