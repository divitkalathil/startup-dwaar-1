import React from "react";
import NavigationBar from "./components/Navigation/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import PreSignup from "./components/Screens/SignupPages/Signup";
import SignupMain from "./components/Screens/SignupPages/SignupMain";
import Login from "./components/Screens/LoginPages/Login";
import FounderDashboard from "./components/Founder/FounderDashboard";
import InvestorDashboard from "./components/Screens/Investor/InvestorDashboard";
import IncubatorDashboard from "./components/Screens/Incubator/IncubatorDashboard";
import MentorDashboard from "./components/Screens/Mentor/MentorDashboard";
import JobSeekerDashboard from "./components/Screens/JobSeeker/JobSeekerDashboard";
import Home from "./components/Screens/Home/Home";
import InvestorForm from "./components/Screens/Investor/InvestorForm";

import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-secondary">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/founder" element={<FounderDashboard />} />
          <Route path="/investor" element={<InvestorDashboard />} />
          <Route path="/incubator" element={<IncubatorDashboard />} />
          <Route path="/mentor" element={<MentorDashboard />} />
          <Route path="/job-seeker" element={<JobSeekerDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<PreSignup />} />
          <Route path="signup/:user/" element={<SignupMain />} />
          <Route path="signup/:user/join" element={<InvestorForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
