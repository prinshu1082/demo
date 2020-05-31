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
            if (list[i] === props.addElement) {
                count++;
            }
        }
        if (count === 0) {
            list.push(props.addElement);
        }
    }
    const deleteHandler = (item) => {
        // let tempArr = list.filter(item1 => item1 !== item);
        // list = [...tempArr];
        // console.log(list);
        console.log(list)
        console.log(item + "   dwqehwrjeb")
        setList(prevList =>
            prevList.filter(listItem => listItem !== item));
    }
    return (
        <div className={classes.Mylist}>
            <h4>MY LIST</h4>
            <ul>
                {list.map(listItem => (
                    <li key={listItem} onClick={() => deleteHandler(listItem)}>{listItem}</li>
                ))}
            </ul>
        </div>
    )
}

export default Mylist;