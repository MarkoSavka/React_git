//useState - хук стану React

//props
//<Article title="My Article Title" author="My Name" /> це ми в батьківському компоненті використовуємо дочірній(Author)

//Тоді всередині Article ви можете отримати доступ до title і author через props
//export function Article(props) {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.author}</p>
//         </div>
//     );
// }

import React, { useState } from 'react';

export function Article()
{
    const [title, setTitle] = useState(''); //змінна стану title та функція setTitle
    const [author, setAuthor] = useState(''); //useState повертає масив з двох елементів: поточне значення стану(author) та функцію для його оновлення
    const [body, setBody] = useState(''); //Ці два значення можна отримати за допомогою деструктуризації масиву, const [body, setBody] =
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