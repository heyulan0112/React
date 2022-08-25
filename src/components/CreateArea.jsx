import React, { useState } from "react";

function CreateArea(props) {
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });
    function hancleChange(event){
        const {name,value} = event.target;
        return setInputText(preValue => {
            return {
                ...preValue,
                [name]:value
            }
        });
    }

    function handleAdd(event){
        props.onAdd(inputText);
        setInputText({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
        <form className="create-note">
            <input 
            onChange={hancleChange} 
            value={inputText.title} 
            name="title" 
            placeholder="Title"
            />
            <textarea 
            onChange={hancleChange} 
            value={inputText.content} 
            name="content" 
            placeholder="Take a note..." 
            rows="3"
            />
            <button onClick={handleAdd}>Add</button>
        </form>
        </div>
  );
}

export default CreateArea;