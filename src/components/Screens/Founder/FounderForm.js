import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import "../InputBox/InputBox.css";
import "../InputBox/Form.css";
import "../SignupPages/Signup.css";

const FounderForm = () => {
  const [page, setPage] = useState(1);
  const [startupData, setStartupData] = useState({
    startupName: "",
    fundingInfo: "",
    stage: "",
    idea: "",
  });

  console.log(startupData);

  const heading = ["About us", "Contact Info", "Category", "Your Interest"];

  return (
    <div className="form w-100">
      <div className="form-container bg-white p-5">
        <div className="text-xxl align-center subhead fg-dark">
          {heading[page - 1]}
        </div>
        <div className="progress-bar text-xs fg-black">
          <span className="text-xs">Step 1</span>
          <span className="text-xs">Step 2</span>
          <span className="text-xs">Step 3</span>
          <span className="text-xs">Step 4</span>
        </div>
        <div>
          <span
            className="fill-color bg-primary"
            style={{ width: `${(page / 4) * 100}%` }}
          ></span>
        </div>
        <hr className="mb" />

        <div className="form-main mt-4">
          <div className="form-item">
            <div className="col-12 col-xs-6">
              <InputBox
                idValue="startup-name"
                title="Startup Name"
                getData={(data) => {
                  setStartupData({ ...startupData, startupName: data });
                }}
              />
            </div>
          </div>
          <div className="form-item">
            <div className="col-12 col-xs-6">
              <InputBox
                idValue="lastName"
                title="Last Name"
                getData={(data) => setStartupData(data)}
              />
            </div>
          </div>

          {/*
          <div className="form-item">
            <div className="col-12 col-xs-6">
              <InputBox
                idValue="lastName"
                title="Last Name"
                getData={(data) => setStartupData(data)}
              />
            </div>
          </div>
          <div className="form-item">
            <div className="col-12 col-xs-6">
              <InputBox
                idValue="lastName"
                title="Last Name"
                getData={(data) => setStartupData(data)}
              />
            </div>
          </div>
          <div className="form-item">
            <div className="col-12 col-xs-6">
              <InputBox
                idValue="lastName"
                title="Last Name"
                getData={(data) => setStartupData(data)}
              />
            </div>
          </div>
          <div className="form-item">
            <div className="col-12 col-xs-6">
              <InputBox
                idValue="lastName"
                title="Last Name"
                getData={(data) => setStartupData(data)}
              />
            </div>
          </div> */}
          <div className="form-item">
            <input
              type={"button"}
              name="go-back"
              id="go-back"
              className="input-field
              btn-bg-secondary fg-primary"
              value={"Go Back"}
              onClick={() => setPage((prev) => prev - 1)}
              required
            />
          </div>
          <div className="form-item">
            <input
              disabled={false}
              type={"button"}
              name="submit-btn"
              id="submit-btns"
              className={`input-field ${
                // checkAllFields()
                true ? "btn-bg-primary" : "btn-primary"
              } fg-white`}
              value={"Next"}
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderForm;
