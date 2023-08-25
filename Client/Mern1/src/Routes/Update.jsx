import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./Routes.css"

const Update = () => {

    const [updateUserData, setUpdateUserData] = useState({
        name: "",
        email: "",
        age: ""
    })

    const navigate = useNavigate();

    const handleInputs = (e) => {
        const { name, value } = e.target;

        setUpdateUserData((prevData) => ({ ...prevData, [name]: value }))
    }

    const { id } = useParams();

    // const handleSingleUser = async (e) => {
    //     try {
    //         const res = await fetch(`http://localhost:3000/${id}`);

    //         if (res.status === 5000) {
    //             window.alert("unable to update the dataset")
    //         } else {
    //             const data = await res.json();
    //             console.log("updated user data:", data);
    //         }
    //     } catch (error) {
    //         console.log("Error:", error);
    //         window.alert("error occur")
    //     }
    // }

    // useEffect(() => {
    //     handleSingleUser();
    // }, [])

    const handleEdit = async (e) => {
        e.preventDefault();

        const { name, email, age } = updateUserData;

        const res = await fetch(`http://localhost:3000/${id}`, {
            method: "PATCH",
            body: JSON.stringify(updateUserData),
            headers: {
                "content-type": "application/json"
            }
        })

        if (res.status === 5000) {
            window.alert("unable to update the dataset")
        } else {
            const data = await res.json();
            console.log("updated user data:", data);
            navigate("/checkout")
        }
    }

    return (
        <>
            <form action="" className="form_container">
                <div className="form">
                    <h1>Update</h1>
                    <div className="inputs">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={updateUserData.name} onChange={handleInputs} required />
                    </div>
                    <div className="inputs">
                        <label htmlFor="email">E-Mail Id</label>
                        <input type="email" name="email" id="email" value={updateUserData.email} onChange={handleInputs} required />
                    </div>
                    <div className="inputs">
                        <label htmlFor="age">Age</label>
                        <input type="text" name="age" id="age" value={updateUserData.age} onChange={handleInputs} required />
                    </div>
                    <button type="submit" onClick={handleEdit} >Update</button>
                </div>
            </form>
        </>
    )
}

export default Update
