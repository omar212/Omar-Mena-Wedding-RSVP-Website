import React, { useState } from "react";
import WeddingRSVP from "./NewWeddingRSVP/WeddingRSVP";
import KatbRSVP  from "./KatbRSVP/KatbRSVP";
import BridalShowerRSVP from "./BridalShower/BridalShower";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./App.css";

const App = () => {
  
  return (
    <div className="App">
      <Header />
      <WeddingRSVP />
      <KatbRSVP />
      <BridalShowerRSVP />
      <Footer />
    </div>
  );
};

export default App;