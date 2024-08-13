import noteContext from "./noteContext";
//import { useState } from "react";

const NoteState = (props)=>{

    const notes = [
        {
          "_id": "66b885e9f3fea1ae8ed38616",
          "user": "66b7d0944f166d46b45cec46",
          "title": "My Note",
          "description": "This a vd deition",
          "tag": "personal",
          "date": "2024-08-11T09:35:37.325Z",
          "__v": 0
        },
        {
          "_id": "66b92847d73eda00858477e4",
          "user": "66b7d0944f166d46b45cec46",
          "title": "My Note1",
          "description": "This a note 1",
          "tag": "personal",
          "date": "2024-08-11T21:08:23.957Z",
          "__v": 0
        },
        {
          "_id": "66b92852d73eda00858477e6",
          "user": "66b7d0944f166d46b45cec46",
          "title": "My Note2",
          "description": "This a note 2",
          "tag": "personal",
          "date": "2024-08-11T21:08:34.386Z",
          "__v": 0
        },
        {
          "_id": "66b9285ad73eda00858477e8",
          "user": "66b7d0944f166d46b45cec46",
          "title": "My Note3",
          "description": "This a note 3",
          "tag": "personal",
          "date": "2024-08-11T21:08:42.442Z",
          "__v": 0
        }
      ]

    return(
        <noteContext.Provider value={{notes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState