import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Routes.css"

const Checkout = () => {

  const [userData, setUserData] = useState([]);
  // to get the data
  const getData = async () => {
    console.log("fetching data");

    const res = await fetch("https://notes1-1308.onrender.com");
    console.log("Response received:", res);

    if (res.status === 400) {
      window.alert("Unable to get data");
    } else {
      const data = await res.json();
      console.log("Data parsed:", data);

      // Check if the data structure matches your API response
      if (data && data["User Data"]) {
        setUserData(data["User Data"]);
      } else {
        console.log("Invalid data structure:", data);
        window.alert("Received data has an invalid structure");
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);


  // t delete the data
  const handleDelete = async (id) => {
    const res = await fetch(`https://notes1-1308.onrender.com/${id}`, {
      method: "DELETE"
    })

    if (res.status === 500) {
      window.alert("Can not delete this card")
    } else {
      const data = await res.json();
      window.alert("deleted successfully")
      console.log("data deleted", data);
    }

  }


  console.log(userData)

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
                  <NavLink className='btn edit' to={`/${e._id}`}>Edit</NavLink>
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
