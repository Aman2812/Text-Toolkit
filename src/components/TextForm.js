import React, { useState } from 'react';
import copy from "copy-to-clipboard"; 

const TextForm = (props) => {

    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlrt("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlrt("Converted to Lowercase!", "success");
    }

    const handleCopyText = () => {
        copy(text);
        props.showAlrt("Copy to clipboard!", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlrt("Extra spaces removed!", "success");
    }

    const handleClearText = () => {
        setText(" ");
        props.showAlrt("Text Cleared!", "success");
    }

    return (
        <>
        <div className="container my-2">
            <h1>Enter Your Text Below...</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="11" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button> 
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        </div> 

        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').filter((elem)=>{return elem.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text in above textbox to preview it here"}</p>
        </div> 
        </>
    )
}

export default TextForm;
