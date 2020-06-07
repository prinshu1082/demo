import React, { useState,useEffect } from 'react';
import axios from 'axios';

import Anime from './Anime/Anime';
import Books from './Books/Books';
import Mylist from './Mylist/Mylist';
import ItemDetails from './ItemDetails/ItemDetails'
import classes from './App.module.css';


const App = () => {

  const [switchButton, setSwitchButton] = useState(true);
  const [detail, setDetail] = useState();
  const [listItem, setListItem] = useState();
  const [animes, setAnimes] = useState([]);
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

    useEffect(() => {
        axios.get('https://anime-1a938.firebaseio.com/anime.json')
            .then(response => {
                const loadAnimes = [];
                for (const key in response.data) {
                    loadAnimes.push({
                        id: key,
                        name: response.data[key].name,
                        description: response.data[key].description
                    });
                }
                setAnimes(loadAnimes);
            });
    }, []);


  let buttonValue = "Switch to Anime";

  const switchHandle = () => {
    setSwitchButton(!switchButton);
  }
  const detailHandler = id => {
    setDetail(<ItemDetails  part ={urlPart} id={id} click={addHandler}></ItemDetails>)
  }

  let urlPart='books';
  let list = <Books  books={books} detail={detailHandler}></Books>;

  if (!switchButton) {
    list = <Anime animes={animes} detail={detailHandler}></Anime>
    urlPart='anime';
    buttonValue = "Switch to Book";
  }

  const addHandler = element => {
    setListItem(<Mylist addElement={element}></Mylist>)
  }

  return (
    <div>
      <h1 className={classes.App}>Anime and Books</h1>
      <button className={classes.Button} onClick={switchHandle}>{buttonValue}</button>
      {list}
      {detail}
      {listItem}
    </div>

  );
}

export default App;