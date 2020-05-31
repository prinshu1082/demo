import React, { useState } from 'react';

import Anime from './Anime/Anime';
import Books from './Books/Books';
import Mylist from './Mylist/Mylist';
import ItemDetails from './ItemDetails/ItemDetails'
import classes from './App.module.css';


const App = () => {

  const [switchButton, setSwitchButton] = useState(true);
  const [detail, setDetail] = useState();
  const [listItem,setListItem]=useState();

  let buttonValue = "Switch to Anime";

  const switchHandle = () => {
    setSwitchButton(!switchButton);
  }

  const detailHandler = element => {
    let elementArr = [];
    elementArr.push(element);
    setDetail(<ItemDetails element={elementArr} click={addHandler}></ItemDetails>)
  }

  let list = <Books detail={detailHandler}></Books>;

  if (!switchButton) {
    list = <Anime detail={detailHandler}></Anime>
    buttonValue = "Switch to Book";
  }

  const addHandler = element => {
    setListItem(<Mylist addElement={element[0].name}></Mylist>)
  }

  return (
    <div>
      <h1 className={classes.App}>Heading 1</h1>
      <button onClick={switchHandle}>{buttonValue}</button>
      {list}
      {detail}
      {listItem}
    </div>

  );
}

export default App;

//Switch button on Top and middle of component 
//Component on left side 
//Description Component on right side with same height as other component
//in description component header in middle
// In Description compoenent Add button in botton middle
//My list component below these two component in middle
//Mylist header in middle