import React, { useState } from "react";

function App() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    age: "",
    nationalCard: "",
  });
  function handleChangeInput(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  function checkForm(e) {
    e.preventDefault();
  }
  return (
    <div className="d-flex justify-content-center pt-5">
      <form onSubmit={checkForm}>
        <div className="form-group">
          <label htmlFor="firstName" className="d-block">
            Name
          </label>
          <input
            id="fistName"
            name="firstName"
            type="text"
            className="form-control"
            value={formState.firstName}
            onChange={handleChangeInput}
            style={{
              border: `${
                formState.firstName.length > 2 ? "2px solid green" : ""
              }`,
            }}
          ></input>
          <small id="fillName" className="form-text text-muted">
            {formState.firstName ? "" : "Enter your name"}
          </small>
        </div>
        <div className="form-group pt-3">
          <label htmlFor="lastName" className="d-block">
            Family
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="form-control"
            value={formState.lastName}
            onChange={handleChangeInput}
            style={{
              border: `${
                formState.lastName.length > 3 ? "2px solid green" : ""
              }`,
            }}
          ></input>
          <small id="fillFamily" className="form-text text-muted">
            {formState.lastName ? "" : "Enter your last-name"}
          </small>
        </div>
        <div className="form-group pt-3">
          <label htmlFor="age" className="d-block">
            AGE
          </label>
          <input
            id="age"
            name="age"
            type="number"
            className="form-control"
            value={formState.age}
            onChange={handleChangeInput}
            style={{
              border: `${formState.age < 18 ? "" : "2px solid green"}`,
            }}
          ></input>
          <small id="fillAge" className="form-text text-muted">
            {formState.age ? "" : "Enter your age"}
          </small>
        </div>
        <div className="form-group pt-3">
          <label htmlFor="nationalCard" className="d-block">
            ID CARD
          </label>
          <input
            id="nationalCard"
            name="nationalCard"
            type="text"
            className="form-control"
            value={formState.nationalCard}
            onChange={handleChangeInput}
            style={{
              border: `${
                formState.nationalCard.length === 10 ? "2px solid green" : ""
              }`,
            }}
          ></input>
          <small id="fillCard" className="form-text text-muted">
            {formState.nationalCard ? "" : "Enter your National Card"}
          </small>
        </div>
        <div className="pt-4 text-center">
          <button type="submit" className="btn btn-outline-success">
            Send Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
