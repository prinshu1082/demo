import React from 'react';

import classes from './Anime.module.css'

const Anime = props => {

    return (
        <div className={classes.Animes}>
        <ul>
        {props.animes.map(anime => (
          <li key={anime.id} onMouseOver={props.detail.bind(this, anime.id)} >
            <span>{anime.name}</span>
          </li>
        ))}
      </ul>
      </div>
    )
}

export default Anime;