import React, { useEffect, useState } from 'react';
import axios from 'axios';

import classes from './Anime.module.css'

const Anime = props => {

    const [animes, setAnimes] = useState([]);

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

    
    return (
        <div className={classes.Animes}>
        <ul>
        {animes.map(anime => (
          <li key={anime.id} onMouseOver={props.detail.bind(this, anime)} >
            <span>{anime.name}</span>
          </li>
        ))}
      </ul>
      </div>
    )
}

export default Anime;