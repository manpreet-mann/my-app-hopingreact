import React from "react";
import { useState } from "react";
function Contact() {
    const [name, setName] = useState();
    let nameArr = "Manpreet";
    const handleChange = (e) => {
        setName(e.target.value);
    }


    return (
        
        <div className="containerContact contact">
            {nameArr}
            <h1>Contact</h1>
            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <h3>Catering Service, 42nd Living St, 43043 New York, NY</h3>
            <p className="catering_test">You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <div>
                <form>
                    <input onChange={handleChange} placeholder="Name" type="test" />
                    {name}
                    <br />
                    <input placeholder="How many people?" />
                    <br />
                    <input placeholder="Date" type="datetime-local" />
                    <br />
                    <input placeholder="Message \ Special requirements" type="test" />
                    <button>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
}
export default Contact;