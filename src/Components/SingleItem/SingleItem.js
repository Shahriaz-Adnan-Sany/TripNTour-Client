import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../Hooks/UseAuth';

import './SingleItem.css';

const SingleItem = () => {
    const { user } = useAuth();
    const { serviceID } = useParams();
    const [data, setData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const matchData = data.filter(singleData => singleData._id === serviceID);


    // hendle bookings
    const nameRef = useRef();
    const addressRef = useRef();
    const contactRef = useRef();

    const handleAddBooking = e => {

        e.preventDefault();
        const name = nameRef.current.value;
        const address = addressRef.current.value;
        const contact = contactRef.current.value;
        const price = matchData[0]?.cost;
        const packageName = matchData[0]?.title;
        const email = user.email;
        const status = 'Pending';
        const newOrder = { name, address, contact, email, price, packageName, status };
        console.log(newOrder)

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedCount > 0) {
                    alert("Congratulations! You've successfully added an user");
                    // Clearing the input value
                    // e.target.reset()
                }
                history.push('/Order')
            })

    }

    return (
        <div className="singleItem mx-auto px-4">
            <div className="item-container w-75 row mx-auto g-4">
                <div className="col-md-7 col-sm-12 mx-auto p-4">
                    <h4 className="fw-bold text-danger">Trip Informations</h4>
                    <hr />
                    <div className="card shadow-lg mx-auto">
                        <img src={matchData[0]?.img} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h4 className="card-title fw-bold">{matchData[0]?.title}</h4>
                            <hr />
                            <p className="card-text fw-bold">Tour Duration: {matchData[0]?.duration}</p>
                            <hr />
                            <h5 className="card-title text-danger fw-bold">Cost: ${matchData[0]?.cost}</h5>
                            <hr />
                            <p className="card-text">{matchData[0]?.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-sm-12 mx-auto p-4">
                    <form onSubmit={handleAddBooking}>
                        <div className="form-heading">
                            <h4 className="fw-bold text-danger">Book Your Trip Here</h4>
                            <hr />
                        </div>

                        <div className="input-form mx-auto p-2 shadow">
                            {/* <input type="text" className="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1" /> <br />
                            <input type="text" className="form-control" placeholder="Your Address" aria-label="Username" aria-describedby="basic-addon1" />
                            <input className="mt-4 fw-bold btn-style" type="submit" value="Book Now" /> */}
                            <input type="text" ref={nameRef} placeholder="Your Name" name="" id="" /> <br />
                            <input type="text" ref={addressRef} placeholder="Your Address" name="" id="" /> <br />
                            <input type="text" ref={contactRef} placeholder="Your Phone" name="" id="" /> <br />
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SingleItem;