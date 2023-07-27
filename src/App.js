import React, { useState } from "react";
import { TextField, Button, Typography, IconButton, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import emailjs from "emailjs-com";
import "./App.css";

const App = () => {
  const [guestName, setGuestName] = useState("");
  const [guests, setGuests] = useState([]);
  const [emailSent, setEmailSent] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleRSVPSubmit = () => {
  const serviceId = "service_3o28gwi";
  const templateId = "template_ozdm3l9";
  const userId = "6dq3cOnzFTDbaZOC7";

    const templateParams = {
      guestName: guests.join(", "),
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setEmailSent(true);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  const handleAddGuest = () => {
    if (guestName.trim() !== "") {
      setGuests([...guests, guestName.trim()]);
      setGuestName("");
    }
  };

  const handleRemoveGuest = (index) => {
    const updatedGuests = [...guests];
    updatedGuests.splice(index, 1);
    setGuests(updatedGuests);
  };

  const handleMissedGuest = () => {
    setShowForm(true);
    setEmailSent(false);
    setGuestName("");
    setGuests([]);
  };

  const isSubmitDisabled = guests.length === 0;

  return (
    <div className="App">
      {
        !emailSent && (
          <Typography  variant="h4">
          <span className="title">
          Omar & Mena's Wedding RSVP <br/>
          </span>
          </Typography>
        )
      }
      
      {emailSent ? (
        <div>
        <Typography className="success-message" variant="subtitle1">
          <span className="title">
            Thank you! <br /> Your RSVP has been sent successfully!
            See you at the wedding! <br />
            The Tides Estate <br /> 01/21/2024 <br /> 5pm
          </span>
        </Typography>
        <Button variant="outlined" onClick={handleMissedGuest}>
            Missed a Guest ?
          </Button>
        
        </div>
      ) : (
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
              <Button className="submit-button" variant="contained" onClick={handleRSVPSubmit} fullWidth disabled={isSubmitDisabled}>
                Submit RSVP
              </Button>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default App;







// const serviceId = "service_3o28gwi";
//   const templateId = "template_ozdm3l9";
//   const userId = "6dq3cOnzFTDbaZOC7";