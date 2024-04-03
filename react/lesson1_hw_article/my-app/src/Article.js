//useState - хук стану React


import React, { useState } from 'react';

export function Article()
{
    const [title, setTitle] = useState(''); 
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [newtitle, setNewTitle] = useState('');
    const [newauthor, setNewAuthor] = useState('');
    const [newbody, setNewBody] = useState('');
    const [showInfo, setShowInfo] = useState(false);

    function printInfo(isCalled) {
        if(isCalled) {
            setNewTitle(title);
            setNewAuthor(author);
            setNewBody(body);
            setShowInfo(true);
        }
    }

    return(
        <div>
            <form style={{margin: '10px', padding: '20px', border: '1px solid black', borderRadius: '5px', borderColor:'red'}}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
                <label style={{marginLeft:'20px'}}>
                    Author:
                    <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
                </label>
                <label style={{marginLeft:'20px'}}>
                    Body:
                    <textarea value={body} onChange={e => setBody(e.target.value)} />
                </label>
            </form>
            <button onClick={() => printInfo(true)}>Print info</button>
            {showInfo && (
                <div style={{ margin: '20px', padding: '20px', border: '1px solid black', borderRadius: '5px', borderColor:'red' }}>
                    <h2 style={{ color: 'blue' }}>Title: {newtitle}</h2>
                    <h3 style={{ color: 'green' }}>Author: {newauthor}</h3>
                    <p style={{ color: 'red' }}>Body: {newbody}</p>
                </div>
            )}
        </div>
    );
}