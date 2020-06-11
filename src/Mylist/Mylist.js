import React, { useState } from 'react';

import classes from './Mylist.module.css'

const Mylist = props => {
    const [list, setList] = useState([]);
    if (list.length === 0) {
        list.push(props.addElement);
    }
    else {
        let count = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === props.addElement.id) {
                count++;
            }
        }
        if (count === 0) {
            list.push(props.addElement);
        }
    }
    return (
        <div className={classes.Mylist}>
            <h4>MY LIST</h4>
            <ul>
                {list.map((listItem,index) => (
                    <li key={listItem.id} >{listItem.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Mylist;