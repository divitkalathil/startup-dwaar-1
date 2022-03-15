import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import OTPInput, { ResendOTP } from "otp-input-react";

const StartupDetails = ({ setPage, startupState, startupDispatch }) => {
  const navigate = useNavigate();

  const addStartupDetail = (e, target) => {
    // e.preventDefault();
    console.log("Adding data...");
    startupDispatch({ type: target, payload: e.target.value });
  };

  console.log(startupState);

  return (
    <div className="form-main">
      <div className="form-item">
        <label htmlFor="startup-name" className="text-md">
          Name of Startup
          <span className="fg-danger"> *</span>
        </label>
        <input
          type={"text"}
          name="startup-name"
          id="startup-name"
          className="input-field"
          placeholder="Enter the name of your Startup"
          onChange={(e) => addStartupDetail(e, "name")}
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="registered-name" className="text-md">
          Registered name of Startup
          <span className="fg-danger"> *</span>
        </label>
        <input
          type={"text"}
          name="registered-name"
          id="registered-name"
          className="input-field"
          placeholder="Enter the resgistered name of Startup"
          onChange={(e) => addStartupDetail(e, "registeredName")}
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="website" className="text-md">
          Website URL
          <span className="fg-danger"> *</span>
        </label>
        <input
          type={"text"}
          name="website"
          id="website"
          className="input-field"
          placeholder="Enter Startup website URL"
          onChange={(e) => addStartupDetail(e, "website")}
          required
        />
      </div>
      {/* name: "", registeredName: "", website: "", sector: "", stage: "",
          inceptionDate: "", city: "", idea: "", pitchDeck: "", */}
      <div className="form-item">
        <label htmlFor="sector" className="text-md">
          Starup Sector
          <span className="fg-danger"> *</span>
        </label>
        <select
          name="sector"
          id="sector"
          className="input-field"
          onChange={(e) => addStartupDetail(e, "sector")}
          required
        >
          <option value="" disabled>
            Select your option
          </option>
          <option value={"software"}>Software</option>
          <option value={"Agriculture"}>Agriculture</option>
          <option value={"Art"}>Art</option>
          <option value={"Assistance Technology"}>Assistance Technology</option>
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="inception" className="text-md">
          Date of Inception
          <span className="fg-danger"> *</span>
        </label>
        <input
          type={"date"}
          name="inception"
          id="inception"
          className="input-field"
          onChange={(e) => addStartupDetail(e, "inceptionDate")}
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="city" className="text-md">
          Date of Inception
          <span className="fg-danger"> *</span>
        </label>
        <input
          type={"text"}
          name="city"
          id="city"
          className="input-field"
          placeholder="Enter the operating city of Startup"
          onChange={(e) => addStartupDetail(e, "city")}
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="stage" className="text-md">
          Startup Stage
          <span className="fg-danger"> *</span>
        </label>
        <select
          name="stage"
          id="stage"
          className="input-field"
          onChange={(e) => addStartupDetail(e, "stage")}
          required
        >
          <option value="" disabled selected>
            Choose your option
          </option>
          <option value={"ideation"}>Ideation</option>
          <option value={"validation"}>Validation</option>
          <option value={"early traction"}>Early Traction</option>
          <option value={"scaling"}>Scaling</option>
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="pitchDeck" className="text-md">
          Please attach your pitch deck
          <span className="fg-danger"> *</span>
        </label>
        <input
          type="file"
          name="pitchDeck"
          id="pitchDeck"
          className="input-field"
          onChange={(e) => addStartupDetail(e, "pitchDeck")}
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="idea" className="text-md">
          Short description about your Startup
          <span className="fg-danger"> *</span>
        </label>
        <textarea
          rows={5}
          name="idea"
          id="idea"
          className="input-field"
          placeholder="Let it flow..."
          onChange={(e) => addStartupDetail(e, "idea")}
          required
        />
      </div>

      <div className="form-item" />

      <div className="form-item">
        <input
          type={"button"}
          name="go-back"
          id="go-back"
          className="input-field btn-bg-secondary fg-primary"
          value={"Go Back"}
          onClick={() => setPage((prev) => prev - 1)}
          required
        />
      </div>
      <div className="form-item">
        <input
          type={"submit"}
          name="submit-btn"
          id="submit-btns"
          className="input-field btn-bg-primary fg-white"
          value={"Submit"}
          onSubmit={(e) => {
            navigate("/");
          }}
          required
        />
      </div>
    </div>
  );
};

export default StartupDetails;
