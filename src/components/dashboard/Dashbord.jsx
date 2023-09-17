import React, { useEffect, useState } from "react";
import "./Dashbord.scss";
import UserForm from "../userform/UserForm";

const Dashbord = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    dob: "",
    gender: "",
    hobbies: "",
    favFood: "",
  });


  const updateUserList = () => {
    const accumulatedFormData = [];
    for (let key in localStorage) {
      const storedData = localStorage.getItem(key);
      if (storedData) {
        const data = JSON.parse(storedData);
        accumulatedFormData.push(data);
      }
    }
    setFormData(accumulatedFormData);
  };

  // callback function to handle the submit button click
  const handleChildSubmitClick = () => {
    updateUserList();
  };

  useEffect(() => {
    updateUserList();
  }, []);

  const handleDelete = (key) => {
    localStorage.removeItem(formData[key].id);
    updateUserList();
    console.log("hello");
  };

  const setColor = (key) => {
    let age = formData[key].age;
    if (age <= 25) {
      return "green";
    } else if (age > 25 && age <= 50) {
      return "purple";
    } else {
      return "orange";
    }
  };

  // funtion returns start here
  return (
    <div className="hero">
      <div className="topArea">
        <h3>LIST OF USERS</h3>
        <div></div>
        <UserForm
          value="ADD USER"
          btnVal="ADD USER DATA"
          onSubmit={handleChildSubmitClick}
        />
      </div>

      <div className="card-wrapper">
        {Object.keys(formData).map((key, index) => (
          <div key={index} className="card">
            <div className="card-head">
              <div className="title">
                <h3>{formData[key].name}</h3>
                <div
                  style={{ backgroundColor: setColor(key) }}
                  className="circle"
                ></div>
              </div>
            </div>
            <hr />

            <div className="card-body">
              <h3>AGE : {formData[key].age}</h3>
              <h3>DOB : {formData[key].dob}</h3>
              <h3>GENDER : {formData[key].gender}</h3>
              <h3>FOOD : {formData[key].favFood}</h3>
              <h3>HOBBIES : {formData[key].hobbies}</h3>
            </div>
            <hr />

            <div className="card-bottom">
              <button className="delete-btn" onClick={() => handleDelete(key)}>
                DELETE
              </button>
              {/* <button onClick={handleView}>VIEW</button> */}

              <UserForm
                value="EDIT"
                editData={formData[key]}
                btnVal="EDIT USER DATA"
                onSubmit={handleChildSubmitClick}
              />

              <UserForm
                value="VIEW"
                editData={formData[key]}
                btnVal="VIEW USER DATA"
                viewMode={true}
              />
            </div>
          </div>
        ))}
      </div>
      {/* card wrapper ends here */}
    </div>
  );
};

export default Dashbord;
