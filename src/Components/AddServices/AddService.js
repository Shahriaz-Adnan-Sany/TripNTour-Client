import React, { useRef } from 'react';
import './AddService.css';
const AddService = () => {
    // const { titleRef, descriptionRef, costRef, durationRef, imageRef } = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const costRef = useRef();
    const durationRef = useRef();
    const imageRef = useRef();

    const handleAddService = e => {

        e.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const cost = costRef.current.value;
        const duration = durationRef.current.value;
        const img = imageRef.current.value;
        const newService = { title, description, cost, duration, img };
        console.log(newService)

        // fetch('http://localhost:5000/services', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(newService)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             alert("Congratulations! You've successfully added an user");
        //             // Clearing the input value 
        //             e.target.reset();
        //         }
        //     })

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Congratulations! You've successfully added an user");
                    // Clearing the input value
                    e.target.reset()
                }
            })

    }
    return (
        <div className="Add-service p-4">
            <h2>Add A New Service</h2>
            <form onSubmit={handleAddService}>
                <input type="text" ref={titleRef} placeholder="Title" name="" id="" /> <br />
                <input type="text" ref={descriptionRef} placeholder="Description" name="" id="" /> <br />
                <input type="text" ref={durationRef} placeholder="Duration" name="" id="" /> <br />
                <input type="text" ref={costRef} placeholder="Cost" name="" id="" /> <br />
                <input type="text" ref={imageRef} placeholder="Image Url" name="" id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddService;