import React,{useEffect,useState} from 'react';
import axios from 'axios';

import classes from './ItemDetails.module.css';

const ItemDetails = props => {
    const [element,setElement]=useState({});
    useEffect(() => {
        axios.get('https://anime-1a938.firebaseio.com/'+props.part+'/'+props.id+'.json')
            .then(response => {
                setElement({id:props.id,...response.data})
            })
    }, [props.id,props.part]);

    let detail='';

    if(element){
        detail=(
            <div className={classes.ItemDetails}>
            <h3>{element.name}</h3>
            <p>{element.description}</p>
            <button onClick={props.click.bind(this, element)}>ADD</button>
        </div>
        )
    }

    return detail;
}

export default ItemDetails;