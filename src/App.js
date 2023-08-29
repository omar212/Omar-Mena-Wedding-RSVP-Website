import React, { useState } from "react";
import WeddingRSVP from "./WeddingRSVP/WeddingRSVP";
import KatbRSVP  from "./KatbRSVP/KatbRSVP";
import BridalShowerRSVP from "./BridalShower/BridalShower";
import WeddingInvitation from "./WeddingInvitation/WeddingInvitation";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./App.css";

const App = () => {
  
  return (
    <div className="App">
      <Header />
      <WeddingInvitation />
      <WeddingRSVP />
      {/* <KatbRSVP />
      <BridalShowerRSVP /> */}
      <Footer />
    </div>
  );
};

export default App;