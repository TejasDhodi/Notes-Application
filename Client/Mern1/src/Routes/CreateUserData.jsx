import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Routes.css"
const CreateUserData = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: ""
  })

  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    try {

      e.preventDefault();

      const res = await fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "content-type": "application/json"
        }
      })

      const data = res.json();

      if (res.status === 422 || !data) {
        alert("All Fields are mandatory")
      } else if (res.status === 201) {
        alert("Successfully added")
        navigate("/checkout")
      }

      console.log(userData);

    } catch (error) {
      alert('Unable to create user')
    }
  }

  return (
    <>
      <form action="" className="form_container">
        <div className="form">
          <h1>Create</h1>
          <div className="inputs">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={userData.name} onChange={handleInputs} required />
          </div>
          <div className="inputs">
            <label htmlFor="email">E-Mail Id</label>
            <input type="email" name="email" id="email" value={userData.email} onChange={handleInputs} required />
          </div>
          <div className="inputs">
            <label htmlFor="age">Age</label>
            <input type="text" name="age" id="age" value={userData.age} onChange={handleInputs} required />
          </div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default CreateUserData
