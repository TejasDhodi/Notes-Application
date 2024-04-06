import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Routes.css"

const Checkout = () => {

  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();
  // to get the data
  const getData = async () => {
    try {

      const res = await fetch("http://localhost:3000");
      console.log("Response received:", res);

      const data = await res.json();

      // Check if the data structure matches your API response
      if (data && data["User Data"]) {
        setUserData(data["User Data"]);
      } else {
        console.log("Invalid data structure:", data);
        alert("Received data has an invalid structure");
      }


    } catch (error) {
      alert("Unable to get data");
      console.log(error);
    }
  }


  // t delete the data
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/${id}`, {
        method: "DELETE"
      })
      const data = await res.json();

      if (res.status === 200) {
        alert("deleted successfully")
        getData();
        console.log("data deleted", data);
      }

    } catch (error) {
      alert('Can not delete this card')
      console.log(error);
    }


  }

  // To Navigate to update
  const handleNavigate = (id) => {
    navigate(`/${id}`)
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="card_container">
        {
          userData.map((e) => {
            return (
              <div className="card" key={e._id}>
                <div className="card_details">
                  <h3>{e.name}</h3>
                  <h5>{e.age}</h5>
                  <p>{e.email}</p>
                </div>
                <div className="card_control">
                  <button className='btn edit' onClick={() => handleNavigate(e._id)}>Edit</button>
                  <button className='btn delete' onClick={() => handleDelete(e._id)}>Delete</button>
                </div>
              </div>

            )
          })
        }
      </div>
    </>
  )
}

export default Checkout
