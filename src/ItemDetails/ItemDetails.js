import React from 'react';

import classes from './ItemDetails.module.css';

const ItemDetails = props => {
    return (
        <div className={classes.ItemDetails}>
            <h3>{props.element[0].name}</h3>
            <p>{props.element[0].description}</p>
            <button onClick={props.click.bind(this, props.element)}>ADD</button>
        </div>
    )
}

export default ItemDetails;