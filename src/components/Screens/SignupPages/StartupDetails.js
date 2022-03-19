import "./Signup.css";

const StartupDetails = ({
  setPage,
  startupState,
  startupDispatch,
  allDetails,
}) => {
  const addStartupDetail = (e, target) => {
    // e.preventDefault();
    console.log("Adding data...");
    startupDispatch({ type: target, payload: e.target.value });
  };

  //validates if all the fields are filled and OTP is also submitted
  const validateForm = () => {
    let filterData = [];
    filterData = Object.keys(startupState).filter((key) => {
      return startupState[key] === "";
    });

    console.log(filterData);

    if (filterData.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  //submit the entire form
  const handleSubmit = () => {
    console.log(allDetails);
  };

  return (
    <div className="form-main">
      <div className="form-item">
        <label htmlFor="startup-name" className="text-md">
          Name of Startup
          <span className="fg-danger"> *</span>
        </label>
        <input
          value={startupState.name}
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
          value={startupState.registeredName}
          type={"text"}
          name="startup-name"
          id="startup-name"
          className="input-field"
          placeholder="Enter the name of your Startup"
          onChange={(e) => addStartupDetail(e, "regName")}
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="website" className="text-md">
          Website URL
          <span className="fg-danger"> *</span>
        </label>
        <input
          value={startupState.website}
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
          value={startupState.sector}
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
          value={startupState.inceptionDate}
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
          City
          <span className="fg-danger"> *</span>
        </label>
        <input
          value={startupState.city}
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
          value={startupState.stage}
          name="stage"
          id="stage"
          className="input-field"
          onChange={(e) => addStartupDetail(e, "stage")}
          required
        >
          <option value="" disabled>
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
          value={startupState.pitchDeck}
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
          value={startupState.idea}
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
          disabled={!validateForm()}
          type={"button"}
          name="submit-btn"
          id="submit-btns"
          className={`input-field ${
            validateForm() ? "btn-bg-primary" : "btn-primary"
          } fg-white`}
          value={"Submit"}
          onClick={() => handleSubmit()}
          required
        />
      </div>
    </div>
  );
};

export default StartupDetails;
