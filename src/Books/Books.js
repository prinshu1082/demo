import React, { useEffect, useState } from 'react';
import axios from 'axios';

import classes from './Books.module.css'

const Books = props => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://anime-1a938.firebaseio.com/books.json')
            .then(response => {
                const loadBooks = [];
                for (const key in response.data) {
                    loadBooks.push({
                        id: key,
                        name: response.data[key].name,
                        description: response.data[key].description
                    });
                }
                setBooks(loadBooks);
            });
    }, []);


    return (
        <div className={classes.Books}>
            <ul>
                {books.map(book => (
                    <li key={book.id} onMouseOver={props.detail.bind(this, book)}>
                        <span>{book.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Books;