import React, { useState } from "react";
import "./UserForm.scss";

const UserForm = ({value}) => {
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



  
  //handling radio buttons
  const [selectedOption, setSelectedOption] = useState('option1');
  
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if(type ==="radio"&&name==="gender")
    {
      setSelectedOption(value); // Update the selectedOption state
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    else if(type ==="selectbox"&&name==="favFood")
    {
      const favFood = e.target.value;
      setFormData({ ...formData, favFood });
    }
    else
    {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
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
      <button onClick={openModal}>{value}</button>

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
                  <input type="text" name="name" required onChange={handleChange}  value={formData.name}   placeholder="Name" />
                </div>
                <div className="input-group">
                  <label>Age</label>
                  <input type="text" name="age" required  value={formData.age} onChange={handleChange}  placeholder="Age" />
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
                    <input type="radio" id="male"    onChange={handleChange}  value='male'  name="gender"  />
                    <label>Male</label>

                    <input type="radio" id="female"    onChange={handleChange}    value="female" name="gender"  />
                    <label >Female</label>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="input-group">
                  <label htmlFor="">Favorate Food</label>
                  {/* <input type="" placeholder="Name" /> */}
                  <select name="favFood" id="" required value={formData.favFood} onChange={handleChange}>
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
