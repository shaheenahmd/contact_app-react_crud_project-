import React, { useEffect, useState } from 'react'
import './Hero.scss'
import Form from '../userform/UserForm'


const Hero = () => {
 
  // const [data,setData]=useState([])

  const [formData, setFormData] = useState({
    // Define your form fields here
    name: "",
    age: "",
    dob: "",
    gender: "",
    hobbies: "",
    favFood: "",
    
  });

  // useEffect(){
 
  // ,[]}

  useEffect(()=>{
      
      for(let key in localStorage){
        // console.log(localStorage.getItem(key));
        // setData(localStorage.getItem(key))
        const storedData = localStorage.getItem(key);
        if (storedData) {
          // Parse the JSON string back into an object
          const Data = JSON.parse(storedData);
          // console.log(Data);
        

          // Iterate over the parsed object and append each key-value pair to the FormData object
          for (const key in Data) {
          if (formDataObj.hasOwnProperty(key)) {
            formData.append(key, Data[key]);
          }
}
          //setFormData(Data, [name]=value)
        }
  
      }
    
  },[])
 
 
  
  return (
    <div className='hero'>
        <div className='topArea'>
            
                <h3>LIST OF USERS</h3>
                <Form/>
                
        </div>
        <div className="card-wrapper">
            {console.log(formData , "hello")}
        </div>
    </div>

  )
}

export default Hero