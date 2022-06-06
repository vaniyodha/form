import React, { useState } from "react";



const Form = () => {
    //  adding states
    const [userInput, studentUserInput] = useState({})

    const eventChangeHandler = (e) => {
        const { name, value } = e.target;
        studentUserInput(prevState => ({
            ...prevState,
            [name]: value
        }));

        // studentUserInput(e.target.name, e.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();;
        console.log(userInput);
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <h1>Login page</h1>

                <label >Student Name :</label>
                <input placeholder='enter here' type='text' name="Name" onChange={eventChangeHandler} /><br />
                <label >Phone number :</label>
                <input placeholder='enter here' type='number' name="Phonenumber" onChange={eventChangeHandler} /><br />
                <label >Email addtress :</label>
                <input placeholder='enter here' type='email' name="Email address" onChange={eventChangeHandler} /><br />
                <label>Date :</label>
                <input type="date" min="1-6-2022" max="1-6-2023" name="Date" onChange={eventChangeHandler} />
                <h3>Address</h3>
                <input type="text" name="Address" onChange={eventChangeHandler} /> <br />
                <h3>course</h3>
                <span className="radio">
                    <input type="radio" name="course" value="101" onChange={eventChangeHandler} />
                    <label>batch 101</label><br />
                    <input type="radio" name="course" value="102" onChange={eventChangeHandler} />
                    <label >batch 102</label><br />
                    <input type="radio" name="course" value="103" onChange={eventChangeHandler} />
                    <label>batch 103</label><br />
                </span>
                <button  >Submit</button>
                <br />
                <button className="btn google" >Sign up with <i className="fa-brands fa-google"></i></button><br />
                <button className="btn github" >Sign up with <i className="fa-brands fa-github"></i></button><br />
            </form>
        </div>
    )
}

export default Form;