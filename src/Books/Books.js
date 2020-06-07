import React from 'react';

import classes from './Books.module.css'

const Books = props => {

    return (
        <div className={classes.Books}>
            <ul>
                {props.books.map(book => (
                    <li key={book.id} onMouseOver={props.detail.bind(this, book.id,)}>
                        <span>{book.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Books;