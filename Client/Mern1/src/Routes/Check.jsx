import React, {useState, useEffect} from 'react'
import "./Routes.css"
const Check = () => {
    const [userData, setUserData] = useState([]);

    const getData = async () => {
        console.log("fetching data");

        const res = await fetch("http://localhost:3000");
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

    console.log(userData)


    useEffect(() => {
        getData();
    }, [])

    console.log(userData);

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
                                <button className='btn edit'>Add</button>
                            </div>
                        </div>

                    )
                })
            }
        </div>
        </>
    )
}

export default Check
