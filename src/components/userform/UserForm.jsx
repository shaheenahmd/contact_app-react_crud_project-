import React, { useState, useEffect } from "react";
import "./UserForm.scss";

const UserForm = ({ value, onSubmit, editData, btnVal, viewMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState(
    editData || {
      // Defining form fields here
      id:"",
      name: "",
      age: "",
      dob: "",
      gender: "",
      hobbies: "",
      favFood: "",
    },
    [editData]
  );

  useEffect(() => {
    // Update the formData state if userToEdit changes
    setFormData(
      editData || {
        id:"",
        name: "",
        age: "",
        dob: "",
        gender: "",
        hobbies: "",
        favFood: "",
      }
    );
  }, [editData]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //handling radio buttons
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio" && name === "gender") {
      setSelectedOption(value); // Update the selectedOption state
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (type === "selectbox" && name === "favFood") {
      const favFood = e.target.value;
      setFormData({ ...formData, favFood });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission logic here
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.removeItem(formData.id);
    let uniquId = new Date().getTime().toString();
    formData.id = uniquId
    localStorage.setItem(uniquId, JSON.stringify(formData));
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
   
    if (typeof onSubmit === "function") {
      onSubmit(formData);
    }
    // Close the modal
    setFormData("");
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>{value}</button>

      {isModalOpen ? (
        <div className="modal">
          <div className="modal-content">
            <div className="model-head">
              <h2>{btnVal}</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Name"
                  />
                </div>
                <div className="input-group">
                  <label>Age</label>
                  <input
                    type="text"
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age"
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-group">
                  <label htmlFor="">DOB</label>
                  <input
                    type="date"
                    name="dob"
                    onChange={handleChange}
                    value={formData.dob}
                    placeholder="Select your date "
                  />
                </div>

                <div className="input-group">
                  <label>Gender</label>
                  <div className="gender">
                    <input
                      type="radio"
                      id="male"
                      onChange={handleChange}
                      value="male"
                      name="gender"
                    />
                    <label>Male</label>

                    <input
                      type="radio"
                      id="female"
                      onChange={handleChange}
                      value="female"
                      name="gender"
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="input-group">
                  <label htmlFor="">Favourite Food</label>
                  
                  <select
                    name="favFood"
                    id=""
                    required
                    value={formData.favFood}
                    onChange={handleChange}
                  >
                    <option>Select</option>
                    <option value="pizza">Pizza</option>
                    <option value="burger">Burger</option>
                    <option value="pasta">Pasta</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="">Hobbies</label>
                  <textarea
                    name="hobbies"
                    id=""
                    cols=""
                    rows="5"
                    placeholder="Your hobbies..."
                    value={formData.hobbies}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="form-btn">
                <button type="button" onClick={closeModal}>
                  {viewMode? "Close":"Cancel"}
                </button>
                <button type="submit" style={{display:viewMode? "none": ""}} >Submit </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserForm;
