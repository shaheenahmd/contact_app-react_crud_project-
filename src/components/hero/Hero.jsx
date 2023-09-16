import React, { useEffect, useState } from "react";
import "./Hero.scss";
import UserForm from "../userform/UserForm";

const Hero = () => {
  const [formData, setFormData] = useState({
    // Define your form fields here
    name: "",
    age: "",
    dob: "",
    gender: "",
    hobbies: "",
    favFood: "",
  });

  useEffect(() => {
    for (const key in localStorage) {
      const storedData = localStorage.getItem(key);
      if (storedData) {
        const Data = JSON.parse(storedData);
        setFormData(Data);
      }
    }
  }, []);

  return (
    <div className="hero">
      <div className="topArea">
        <h3>LIST OF USERS</h3>
        <UserForm />
      </div>

      <div className="card-wrapper">

        <div className="card">
          <div className="card-head">
            <div className="title">
              <h2>Name</h2>
              <div className="circle"></div>
            </div>
           
          </div>
          <hr />

          <div className="card-body">
            <h3>AGE :{formData.name}</h3>
            <h3>DOB :{formData.age}</h3>
            <h3>GENDER :{formData.gender}</h3>
            <h3>FOOD : {formData.favFood}</h3>
            <h3>HOBBIES : {formData.hobbies}</h3>
          </div>
          <hr />

          <div className="card-bottom">
            <button>DELETE</button>
            <button>VIEW</button>
            <button>EDIT</button>
          </div>
        </div>
      </div>
      {/* card wrapper ends here */}

    </div>
  );
};

export default Hero;
