import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);
    function AddNote(newNote){
        return setNotes(preValue => {
            return [
                ...preValue,
                newNote
            ]
        });
    }

    function DeleteNote(id){
        setNotes(preValue => {
            return preValue.filter( (n,index) => {
                    return index !== id;
            } )
        });
    }

    return (
        <div>
        <Header />
        <CreateArea 
            onAdd = {AddNote}
        />
        {notes.map((noteItem,index) => {
            return <Note 
                key={index}  
                id={index} 
                title={noteItem.title} 
                content={noteItem.content}
                onDelete = {(id) => {
                    DeleteNote(id)
                }}
            />
        })}
        {/* <Note key={1} title="Note title" content="Note content" /> */}
        <Footer />
        </div>
  );
}

export default App;