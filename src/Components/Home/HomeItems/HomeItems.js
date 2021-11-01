import React from 'react';
// import { Spinner } from 'react-bootstrap';
import useItems from '../../Hooks/DataHook';
// import useAuth from '../../Hooks/UseAuth';
import Items from '../../Items/Items';
const HomeItems = (props) => {
    const [items, setItems] = useItems(props);
    const item = items.slice(0, 6);
    /* const { user, isLoading } = useAuth();

    if (isLoading) {
        return <Spinner animation="border" variant="primary" />
    } */
    return (
        <div className="course-preview my-4 row">
            <h3 className="my-2">Here Are Some Services Preview</h3>

            {
                item.map(item => <Items item={item} key={item._id}>

                </Items>)
            }
        </div>
    )
}
export default HomeItems;