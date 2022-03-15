import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import OTPInput, { ResendOTP } from "otp-input-react";

const FounderDetails = ({ setPage, personalState, personalDispatch }) => {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  const [enableOTPInput, setEnableOTPInput] = useState(false);

  const checkPhoneNumber = () => {
    return personalState.phoneNumber.length === 10 && !enableOTPInput;
  };

  const addPersonalDetail = (e, target) => {
    // e.preventDefault();
    console.log("Adding data...");
    personalDispatch({ type: target, payload: e.target.value });
  };

  const validateForm = () => {
    let filterData = [];
    filterData = Object.keys(personalState).filter((key) => {
      return personalState[key] === "";
    });

    console.log(filterData);

    if (filterData.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="form-main">
      <div className="form-item">
        <label htmlFor="first-name" className="text-md">
          First Name
          <span className="fg-danger"> *</span>
        </label>
        <input
          value={personalState.firstName}
          type={"text"}
          name="first-name"
          id="first-name"
          className="input-field"
          placeholder="Enter your first name"
          onChange={(e) => addPersonalDetail(e, "first")}
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="last-name" className="text-md">
          Last Name
          <span className="fg-danger"> *</span>
        </label>
        <input
          value={personalState.lastName}
          type={"text"}
          name="last-name"
          id="last-name"
          className="input-field"
          placeholder="Enter your last name"
          onChange={(e) => addPersonalDetail(e, "last")}
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="email-id" className="text-md">
          Email ID
          <span className="fg-danger"> *</span>
        </label>
        <input
          value={personalState.emailID}
          type={"email"}
          name="email-id"
          id="email-id"
          className="input-field"
          placeholder="Enter your email id"
          onChange={(e) => addPersonalDetail(e, "email")}
          required
        />
      </div>

      <div className="form-item">
        <label htmlFor="gender" className="text-md">
          Gender
          <span className="fg-danger"> *</span>
        </label>
        <span>
          <input
            type="radio"
            name="gender"
            id="gender-1"
            className="input-field mr"
            value="Male"
            checked={personalState.gender === "Male"}
            onChange={(e) => addPersonalDetail(e, "gender")}
            required
          />
          <label htmlFor="gender-1" className="text-lg mr">
            Male
          </label>

          <input
            type="radio"
            name="gender"
            id="gender-2"
            value="Female"
            className="input-field mr"
            checked={personalState.gender === "Female"}
            onChange={(e) => addPersonalDetail(e, "gender")}
            required
          />
          <label htmlFor="gender-2" className="text-lg mr">
            Female
          </label>

          <input
            type="radio"
            name="gender"
            id="gender-3"
            value="Other"
            className="input-field mr"
            checked={personalState.gender === "Other"}
            onChange={(e) => addPersonalDetail(e, "gender")}
            required
          />
          <label htmlFor="gender-3" className="text-lg mr">
            Other
          </label>
        </span>
      </div>
      <div className="form-item">
        <label htmlFor="linked-in" className="text-md">
          Linkedin Profile URL
          <span className="fg-danger"> *</span>
        </label>
        <input
          value={personalState.linkedinURL}
          type={"text"}
          name="linked-in"
          id="linked-in"
          className="input-field"
          placeholder="Enter your linkedin URL"
          onChange={(e) => addPersonalDetail(e, "linkedin")}
          required
        />
      </div>

      <div className="form-item">
        <label htmlFor="refer" className="text-md">
          How do you got to know about us?
          {/* <span className="fg-danger"> *</span> */}
        </label>
        <select
          name="refer"
          id="refer"
          className="input-field"
          value={personalState.preference}
          onChange={(e) => addPersonalDetail(e, "preference")}
          required
        >
          <option value="" disabled>
            Select your option
          </option>
          <option value={"newspaper"}>Newspaper</option>
          <option value={"angel-investor"}>Angel Investor</option>
          <option value={"incubator"}>Incubator</option>
          <option value={"email"}>E-mail</option>
          <option value={"other"}>Other</option>
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="ph-number" className="text-md">
          Phone number
          <span className="fg-danger"> *</span>
        </label>
        {/* reused */}
        <span className="form-main">
          <input
            value={personalState.phoneNumber}
            type={"tel"}
            name="ph-number"
            id="ph-number"
            className="input-field"
            placeholder="Enter your phone no."
            onChange={(e) => addPersonalDetail(e, "phNumber")}
            required
            disabled={enableOTPInput}
          />

          <button
            className={`input-field ${
              checkPhoneNumber() ? "btn-bg-primary" : "btn-primary"
            } fg-white`}
            disabled={!checkPhoneNumber()}
            onClick={() => setEnableOTPInput(true)}
          >
            Request OTP
          </button>
        </span>
      </div>
      <div className="form-item">
        <label htmlFor="ph-number" className="text-md">
          Enter the 4 digit OTP
          <span className="fg-danger"> *</span>
        </label>
        <OTPInput
          value={OTP}
          onChange={setOTP}
          // autoFocus
          OTPLength={4}
          otpType="number"
          disabled={!enableOTPInput}
          // secure
          placeholder={[0, 0, 0, 0]}
        />
        {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
      </div>

      <div className="form-item">
        <input
          type={"button"}
          name="go-back"
          id="go-back"
          className="input-field btn-bg-secondary fg-primary"
          value={"Go Back"}
          onClick={() => navigate(-1)}
          required
        />
      </div>
      <div className="form-item">
        <input
          type={"submit"}
          name="submit-btn"
          id="submit-btns"
          className="input-field btn-bg-primary fg-white"
          value={"Next"}
          // onSubmit={(e) => e.preventDefault()}
          onClick={() => {
            validateForm()
              ? setPage((prev) => prev + 1)
              : alert("Please Fill all the mandatory fields");
          }}
          required
        />
      </div>
    </div>
  );
};

export default FounderDetails;
