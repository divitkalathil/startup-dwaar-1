import React, { useReducer, useState } from "react";
import FounderDetails from "./FounderDetails";
import StartupDetails from "./StartupDetails";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const personalDetials = {
  firstName: "",
  lastName: "",
  gender: "",
  emailId: "",
  linkedinURL: "",
  preference: "NA",
  phoneNumber: "",
};

const startupDetails = {
  name: "",
  registeredName: "",
  website: "",
  sector: "",
  stage: "",
  inceptionDate: "",
  city: "",
  idea: "",
  pitchDeck: "",
};

const personalReducer = (state, action) => {
  switch (action.type) {
    case "first":
      return { ...state, firstName: action.payload };
    case "last":
      return { ...state, lastName: action.payload };
    case "gender":
      return { ...state, gender: action.payload };
    case "email":
      return { ...state, emailId: action.payload };
    case "linkedin":
      return { ...state, linkedinURL: action.payload };
    case "preference":
      return { ...state, preference: action.payload };
    case "phNumber":
      return { ...state, phoneNumber: action.payload };
    default:
      return state;
  }
};

const startupReducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "regName":
      return { ...state, registeredName: action.payload };
    case "website":
      return { ...state, website: action.payload };
    case "sector":
      return { ...state, sector: action.payload };
    case "stage":
      return { ...state, stage: action.payload };
    case "inceptionDate":
      return { ...state, inceptionDate: action.payload };
    case "city":
      return { ...state, city: action.payload };
    case "idea":
      return { ...state, idea: action.payload };
    case "pitchDeck":
      return { ...state, pitchDeck: action.payload };
    default:
      return state;
  }
};

const SignupForm = () => {
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const [personalState, personalDispatch] = useReducer(
    personalReducer,
    personalDetials
  );

  const [startupState, startupDispatch] = useReducer(
    startupReducer,
    startupDetails
  );

  console.log(personalState);
  console.log(startupState);

  const displayPage = () => {
    if (page === 1)
      return (
        <FounderDetails
          setPage={setPage}
          //   personalDetials={personalDetials}
          //   personalReducer={personalReducer}
          personalDispatch={personalDispatch}
          personalState={personalState}
        />
      );
    else if (page === 2)
      return (
        <StartupDetails
          setPage={setPage}
          //   startupDetails={startupDetails}
          //   startupReducer={startupReducer}
          startupState={startupState}
          startupDispatch={startupDispatch}
        />
      );
  };

  return (
    <div className="form-container bg-white">
      <div className="text-xxl align-center subhead fg-dark">
        {page === 1
          ? "Welcome to Startup Dwaar"
          : page === 2
          ? "Startup Details"
          : ""}
      </div>
      <div className="progress-bar text-xs fg-black">
        <span>Step 1</span>
        <span>Step 2</span>
      </div>
      <div
        className="fill-color bg-primary"
        style={{ width: page === 1 ? "50%" : "100%" }}
      ></div>
      <hr className="mb" />
      <form>
        <div className="form-main">
          <div>{displayPage()}</div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
