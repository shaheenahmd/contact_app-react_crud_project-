import React, { useState } from "react";
import "./UserForm.scss";

const UserForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Defining form fields here
    name: "",
    age: "",
    dob: "",
    gender: "",
    hobbies: "",
    favFood: "",
    
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // selectbox
  const handleSelectChange = (e) => {
    const favFood = e.target.value;
    setFormData({ ...formData, favFood });
  };

  // Handle form submission logic here
  const handleSubmit = (e) => {
    e.preventDefault();
  
    localStorage.setItem(formData.name, JSON.stringify(formData))
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    console.log(storedFormData)

    // Close the modal
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>ADD USER</button>

      {isModalOpen ? (
        <div className="modal">
          <div className="modal-content">
            <div className="model-head">
              <h2>ADD USER</h2>
             
            </div>

            <form onSubmit={handleSubmit}>

              <div className="row">
                <div className="input-group">
                  <label >Name</label>
                  <input type="text" name="name" onChange={handleChange}  value={formData.name}   placeholder="Name" />
                </div>
                <div className="input-group">
                  <label>Age</label>
                  <input type="text" name="age"  value={formData.age} onChange={handleChange}  placeholder="Age" />
                </div>
              </div>

              <div className="row">
                <div className="input-group">
                  <label htmlFor="">DOB</label>
                  <input type="date" name="dob" onChange={handleChange}  value={formData.dob} placeholder="Name" />
                </div>



                <div className="input-group">
                  <label htmlFor="">Gender</label>
                  <div>
                    <input type="radio" id="male" onChange={handleSelectChange}   value='male' checked={formData.gender=== 'male'} name="gender"  />
                    <label>Male</label>

                    <input type="radio" id="female" onChange={handleSelectChange}  value="female" name="gender" checked={formData.gender=== 'female'}  />
                    <label >Female</label>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="input-group">
                  <label htmlFor="">Favorate Food</label>
                  {/* <input type="" placeholder="Name" /> */}
                  <select name="favFood" id="" value={formData.favFood} onChange={handleSelectChange}>
                    <option >Select</option>
                    <option value="pizza">Pizza</option>
                    <option value="burger">Burger</option>
                    <option value="pasta">Pasta</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="">Hobbies</label>
                 <textarea name="hobbies" id="" cols="" rows="4" value={formData.hobbies} onChange={handleChange}></textarea>
                </div>
              </div>

              <div className="form-btn">
                <button type="submit" >Submit</button>
                <button type="button" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserForm;
