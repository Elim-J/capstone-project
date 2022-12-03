import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
import '../../../css/Bulletin.css'
var randomColor = require("randomcolor");


export default function DrawingPad(){

    const [item, setItem] = useState("");
    const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []);

    const keyPress = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) {
        newitem();
        }
    };

    const newitem = () => {
        if (item.trim() !== "") {
         //if input is not blank, create a new item object
          const newitem = {
            id: uuidv4(),
            item: item,
            color: randomColor({luminosity: "light",}),
            defaultPos: { x: 100, y: 300 },
          };
    
          //add this new item object to the items array
          setItems((items) => [...items, newitem]);
          //reset item value to empty string
          setItem("");
        } else {
          alert("Enter a item");
          setItem("");
        }
    };
    
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
      }, [items]);

      const updatePos = (data, index) => {
        let newArr = [...items];
        newArr[index].defaultPos = { x: data.x, y: data.y };
        setItems(newArr);
     };
    
     const deleteNote = (id) => {
        setItems(items.filter((item) => item.id !== id));
     };
    
    
  return (
    <>
        <input
        className="bulletin--input"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter something..."
        onKeyPress={(e) => keyPress(e)}
        />
        <button className="bulletin--btn" onClick={newitem}>ENTER</button>

        {items.map((item, index) => {
        return (
          <Draggable
            key={item.id}
            defaultPosition={item.defaultPos}
            onStop={(e, data) => {
              updatePos(data, index);
            }}
          >
            <div className='sticky--note' style={{ backgroundColor: item.color }}>
              {`${item.item}`}
              <button id="delete" onClick={(e) => deleteNote(item.id)}>
                X
              </button>
            </div>
          </Draggable>
        );
      })}

    </>
  )
}