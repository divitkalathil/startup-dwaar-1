import React from "react";
import NavigationBar from "./components/Navigation/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import FounderForm from "./components/Screens/Founder/FounderForm";
import Incubator from "./components/Screens/Incubator";
import Investor from "./components/Screens/Investor/InvestorForm";
import Mentor from "./components/Screens/Mentor";
import JobSeeker from "./components/Screens/JobSeeker";
import Home from "./components/Screens/Home/Home";
import Footer from "./components/Screens/Footer/Footer";
import PreSignup from "./components/Screens/SignupPages/Signup";
// import SignupForm from "./components/Screens/SignupPages/SignupForm";
// import FounderDetails from "./components/Screens/SignupPages/FounderDetails";
// import StartupDetails from "./components/Screens/SignupPages/StartupDetails";
import SignupMain from "./components/Screens/SignupPages/SignupMain";
import Login from "./components/Screens/LoginPages/Login";

const App = () => {
  return (
    <div className="bg-secondary">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/founder" element={<FounderForm />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/incubator" element={<Incubator />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/job-seeker" element={<JobSeeker />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<PreSignup />} />
          <Route path="signup/:user" element={<SignupMain />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
