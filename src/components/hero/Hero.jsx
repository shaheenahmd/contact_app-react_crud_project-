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

  useEffect(()=>{
      
    const accumulatedFormData = [];
      for(let key in localStorage)
      {
        const storedData = localStorage.getItem(key);
        if (storedData) {
          const data = JSON.parse(storedData);
          accumulatedFormData.push(data);
        }
      }

      setFormData(accumulatedFormData);
  },[])


  const handleDelete=()=>{
    
  }

  const handleEdit=()=>{
   
  }

  const handleView =()=>{

  }

  return (
    <div className="hero">
    <div className="topArea">
      <h3>LIST OF USERS</h3>
      <UserForm />
    </div>

    <div className="card-wrapper">
    {Object.keys(formData).map((key, index) => (
      <div key={index} className="card">
        <div className="card-head">
          <div className="title">
            <h3>{formData[key].name}</h3>
            <div className="circle"></div>
          </div>
         
        </div>
        <hr />

        <div className="card-body">
          <h3>AGE : {formData[key].age}</h3>
          <h3>DOB :{formData[key].dob}</h3>
          <h3>GENDER :{formData[key].gender}</h3>
          <h3>FOOD : {formData[key].favFood}</h3>
          <h3>HOBBIES : {formData[key].hobbies}</h3>
        </div>
        <hr />

        <div className="card-bottom">
          <button onClick={handleDelete}>DELETE</button>
          <button onClick={handleView}>VIEW</button>
          <button onClick={handleEdit}>EDIT</button>
        </div>
      </div>
      ))}

    </div>
    {/* card wrapper ends here */}

  </div>
  );
};

export default Hero;
