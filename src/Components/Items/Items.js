import React from 'react';
import { Link } from 'react-router-dom';

import './Items.css'
const Items = (props) => {
    const { title, description, _id, img, cost } = props.item;

    return (
        <div className="item-container my-2 col-md-4 g-2 p-4">
            <div className="single-item text-center mx-auto shadow-lg p-3 rounded-4">
                <div className="item-cart-img mx-auto mb-2 p-2">
                    <img className="img-fluid mx-auto rounded-3 " src={img} alt="" />
                </div>
                <div className="item-info text-center my-2 fw-bolder">
                    <h4 className="fw-bold text-danger" >{title.slice(0, 18)}</h4>
                    <hr className="bg-secondary" />

                    <p className="">{description.slice(0, 200)}</p>
                    <hr className="bg-secondary" />
                    <h5 className="fw-bold">Cost: ${cost}</h5>
                    <hr className="bg-secondary" />


                </div>
                <Link to={`/SingleItem/${_id}`}><button className="btn btn-danger mx-auto"> <i className="fas fa-file-signature"></i> Book Now</button></Link>
            </div>
        </div>
    );
};

export default Items;