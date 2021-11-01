import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";


function Orders() {
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, []);

    return (
        <div className=" mx-auto p-5">
            <h1 className="fs-1 text-center mb-3">Manage All Orders</h1>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>User Email</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Package name</th>
                        <th isNumeric>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td>{order.contact}</td>
                            <td>{order.packageName}</td>
                            <td isNumeric>{order.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Orders;
