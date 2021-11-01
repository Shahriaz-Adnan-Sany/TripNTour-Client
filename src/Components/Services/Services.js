import React from 'react';
import useItems from '../Hooks/DataHook';
import Items from '../Items/Items';
import './Services.css';

const Services = (props) => {
    const [items, setItems] = useItems(props);

    return (
        <div className="services-bg p-4">
            <h2 className="font-bold text-light">Here are Premium Services Preview</h2>
            <div className="row">
                {
                    items.map(item => <Items item={item} key={item._id}>

                    </Items>)
                }
            </div>
        </div>
    );
};

export default Services;