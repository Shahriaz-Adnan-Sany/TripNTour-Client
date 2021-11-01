import React, { useState, useEffect } from "react";
import { Badge, Stack, Table } from "react-bootstrap";
import useAuth from "../Hooks/UseAuth";



function MyOrders() {
    const { user } = useAuth();
    const [orders, setOrder] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const url = `http://localhost:5000/orders/${user.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [user]);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remainingUsers = orders.filter((order) => order._id !== id);
                        setOrder(remainingUsers);
                    }
                });
        }
    };

    const handleUpdate = (id) => {
        const updateItem = orders.filter(item => item._id === id);
        // updateItem.status = 'Approved';
    };

    console.log(orderData);
    return (
        <div className="p-2 mx-auto">
            <h1 className="fs-1 text-center mb-3">My Orders</h1>

            <div className="table">

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>User Email</th>
                            <th>Package name</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Price</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => (
                                <tr key={order?._id}>
                                    <td>{order?.email}</td>

                                    <td>{order?.packageName}</td>
                                    <td>{order?.address}</td>
                                    <td>
                                        <Stack direction="row">
                                            <Badge colorScheme="red">{order.status}</Badge>
                                        </Stack>
                                    </td>
                                    <td isNumeric>{order?.price}</td>
                                    <button
                                        onClick={() => handleDelete(order._id)}
                                        className="btn btn-danger"
                                    >
                                        X
                                    </button>

                                    <button
                                        onClick={() => handleUpdate(order._id)}
                                        className="btn btn-warning"
                                    >
                                        Update
                                    </button>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default MyOrders;
