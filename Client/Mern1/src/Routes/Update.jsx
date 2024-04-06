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

    const handleGetSingleData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/${id}`, {
                method: 'GET',
                headers: {
                    "content-type": "application/json"
                }
            });

            const {foundUser} = await response.json();
            console.log('Single User Data : ', foundUser);

            setUpdateUserData({
                name: foundUser.name,
                email: foundUser.email,
                age: foundUser.age
            })
            
        } catch (error) {
            alert('Unable to fill data');
            console.log(error);
        }
    }

    const handleEdit = async (e) => {
        try {
            e.preventDefault();

            const res = await fetch(`http://localhost:3000/${id}`, {
                method: "PATCH",
                body: JSON.stringify(updateUserData),
                headers: {
                    "content-type": "application/json"
                }
            })
            const data = await res.json();

            if (res.status === 200) {
                console.log("updated user data:", data);
                navigate("/checkout")
            }
        } catch (error) {
            alert('Unable to update data')
        }
    }

    useEffect(() => {
        handleGetSingleData();
    }, [])

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
