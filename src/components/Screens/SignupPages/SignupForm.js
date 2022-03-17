import React, { useEffect, useReducer, useState } from "react";
import FounderDetails from "./FounderDetails";
import StartupDetails from "./StartupDetails";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// const startupDetails = {
//   name: "",
//   registeredName: "",
//   website: "",
//   sector: "",
//   stage: "",
//   inceptionDate: "",
//   city: "",
//   idea: "",
//   pitchDeck: "",
// };

// const startupReducer = (state, action) => {
//   switch (action.type) {
//     case "name":
//       return { ...state, name: action.payload };
//     case "regName":
//       return { ...state, registeredName: action.payload };
//     case "website":
//       return { ...state, website: action.payload };
//     case "sector":
//       return { ...state, sector: action.payload };
//     case "stage":
//       return { ...state, stage: action.payload };
//     case "inceptionDate":
//       return { ...state, inceptionDate: action.payload };
//     case "city":
//       return { ...state, city: action.payload };
//     case "idea":
//       return { ...state, idea: action.payload };
//     case "pitchDeck":
//       return { ...state, pitchDeck: action.payload };
//     default:
//       return state;
//   }
// };

const SignupForm = () => {
  // const [page, setPage] = useState(1);
  // const [allDetails, setAllDetails] = useState({});

  // const [startupState, startupDispatch] = useReducer(
  //   startupReducer,
  //   startupDetails
  // );

  // useEffect(() => {
  //   setAllDetails({ ...personalState, ...startupState });
  // }, [setAllDetails, personalState, startupState]);

  return (
    <div>
      {/* {page === 1
          ? "Welcome to Startup Dwaar"
          : page === 2
          ? "Startup Details"
          : ""} */}

      {/* <div className="progress-bar text-xs fg-black">
        <span>Step 1</span>
        <span>Step 2</span>
      </div> */}
      {/* <div
        className="fill-color bg-primary"
        style={{ width: page === 1 ? "50%" : "100%" }}
      ></div> */}

      {/* {page === 1 ? ( */}

      {/* ) : ( */}
      {/* <StartupDetails
            setPage={setPage}
            //   startupDetails={startupDetails}
            //   startupReducer={startupReducer}
            startupState={startupState}
            startupDispatch={startupDispatch}
            allDetails={allDetails}
          /> */}
      {/* )} */}
    </div>
  );
};
export default SignupForm;
