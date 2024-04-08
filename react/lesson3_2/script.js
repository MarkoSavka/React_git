
// function User() 
// { 
//     //const [name,setName]=React.useState(""); 
//     //const [age,setAge]=React.useState(0); 
//     //1 стейт,зберігаю структуру типу джс обʼєкт
//     const [user,setUser]=React.useState({
//         name:'',
//         age:0
//     });
// //    function handleChangeName(event) 
// //     { 
// //         setUser(event.target.value); 
// //     } 
// //     function handleChangeAge(event) 
// //     { 
// //         setUser(event.target.value); 
// //     } 


// function handleChangeName(event) 
// { 
//     setUser({name:event.target.value,age:user.age})//нейм присвоюємо нове значення,а віку витягуємо зі змінної старне значення
//     //setUser({...user, name: event.target.value}); можна й так робити

// } 

// function handleChangeAge(event) 
// { 
//     setUser({name:user.name,age:event.target.value})
// } 
//     return( <div> 
//         <p>Name:{user.name}</p> 
//         <p>Age:{user.age}</p> 
//         <div> 
//             <p> 
//                 <input value={user.name} onChange={handleChangeName}/> 
//             </p> 
//             <p> 
//                 <input type="number" value={user.age} onChange={handleChangeAge}/> 
//             </p> 
//         </div> 
//     </div> 
//     ) 
// } 



//----------------------
//useEffect
// function User() 
// { 
//    const [name,setName]=React.useState(""); 
//     const [age,setAge]=React.useState(0); 
//    // const [user,setUser]=React.useState({name:'',age:0}); 

//    React.useEffect(()=>{ 
//     document.title=`Hello ${name}`; 
//     console.log("useEffect"); 
// },[name])

//    function handleChangeName(event) 
//     { 
//         setName(event.target.value); 
//     } 
//     function handleChangeAge(event) 
//     { 
//         setAge(event.target.value); 
//     } 
//     return( <div> 
//         <p>Name:{name}</p> 
//         <p>Age:{age}</p> 
//         <div> 
//             <p> 
//                 <input value={name} onChange={handleChangeName}/> 
//             </p> 
//             <p> 
//                 <input type="number" value={age} onChange={handleChangeAge}/> 
//             </p> 
//         </div> 
//     </div> 
 
//     ) 
// } 

// ReactDOM.createRoot(document.getElementById("app")).render(<User/>)



//-------------------
//const root=ReactDOM.createRoot(document.getElementById('app'));

// function User()
// {
//     const [name,setName]=React.useState('');

//     const unmount=()=>root.unmount();//лямбда функція

//     React.useEffect(()=>{
//        //доступаємось до елемента з id = 'unmount'
//        const unmountBtn=document.getElementById('unmount');
//        unmountBtn.addEventListener("click",unmount);  //добавляємо подію
//        console.log("EventListener added");
//        //це буде спрацбовувати тоді коли буде звільнення ресурсів,а звільнення йде коли дерево видаляємо
//        return()=>{ //очищуємо ресурси,це як деструктор
//         unmountBtn.removeEventListener("click",unmount);
//         console.log("EventListener removed");
//        }
//     },[])   //    ,[] - цей хук спрацює лише 1 раз при 1 рендерингу

//     return( //лямбда функцією зразу змінюємо сетнейм
//         <div>
//             <p>Name={name}</p>
//             <p>
//                 Name:<input value={name} onChange={(e)=>{setName(e.target.value)}}></input>
//             </p>
//         </div>
//     )
// }
//root.render(<User/>);


//TASKK
//---------------------мій варік
// const root= ReactDOM.createRoot(document.getElementById('app')); 
// function Clock(props)
// {
//     const [date,setDate]=React.useState(new Date())
//     const [name,setName]=React.useState('PU221');
    
//     const unmount=()=>root.unmount();

//     const tick = () => {
//         setDate(new Date());
//     }
    
//     React.useEffect(()=>{
//         const startBtn=document.getElementById('start');
//         startBtn.addEventListener("click",unmount);
        
//         const timerId=setInterval(tick, 1000); 

//         return () => {
//             clearInterval(timerId);
//             startBtn.removeEventListener("click",unmount);
//         }
//     },[]);
    
//     React.useEffect(()=>{
//         const stopBtn=document.getElementById('stop');
//         stopBtn.addEventListener("click",unmount);

//         const timerId=setInterval(tick, 1000); 

//         return () => {
//             clearInterval(timerId);
//             stopBtn.removeEventListener("click",unmount);
//         }
//     },[]);

//         return( 
//             <div> 
//                 <h1> Hi {name}</h1> 
//                 <h2>Now Time:{date.toLocaleTimeString()}</h2> 
//             </div> 
//         ) 
// }
// document.getElementById('start').addEventListener('click', () => {
//     root.render(<Clock/>);
// });

// document.getElementById('stop').addEventListener('click', () => {
//     root.unmount();
// });
// //root.render(<Clock/>); 



//-----------------викладача варік
// const root= ReactDOM.createRoot(document.getElementById('app')); 

// function Clock()
// {
//     const [time,setTime]=React.useState(new Date());

//     let idTimer; 

//     React.useEffect(()=>{

//         idTimer = setInterval(()=>tick(), 1000); 
//         console.log("component start");

//         const btn=document.getElementById('stopbtn');
//         btn.addEventListener("click",stopBtn);
//     },[])

//     function stopBtn()
//     {
//         clearInterval(idTimer);
//     }

//     function startBtn()
//     {
//         setInterval(()=>tick(),1000);
//     }

//     function tick()
//     {
//         setTime(new Date());
//     }

//     return(
//         <div>
//             <p>Now Time: {time.toLocaleTimeString()}</p>
//             <p>
//                 <button id="startbtn">Start</button>
//             </p>
//             <p>
//                 <button id="stopbtn">Stop</button>
//             </p>
//         </div>
//     )
// }

// root.render(<Clock/>);




//завдання на парі останнє і дз
const root= ReactDOM.createRoot(document.getElementById('app')); 

function Timer()
{
    const [time,setTime]=React.useState(0);
    
    let idTimer; 

    React.useEffect(()=>{

        console.log("component start");

        const startBtn=document.getElementById('startbtn');
        startBtn.addEventListener("click",start);

        const stopBtn=document.getElementById('stopbtn');
        stopBtn.addEventListener("click",stop);

        return () => {
            startBtn.removeEventListener("click",start);
            stopBtn.removeEventListener("click",stop);
        }
    },[])

    function start()
    {
        idTimer = setInterval(()=>tick(),1000);
    }

    function stop()
    {
        clearInterval(idTimer);
        idTimer=0;
    }

    function tick()
    {
        setTime((time)=>time+1);
    }

    return(
        <div>
            <p>Now Time: {time}</p>
            <p>
                <button id="startbtn">Start</button>
            </p>
            <p>
                <button id="stopbtn">Stop</button>
            </p>
        </div>
    )
}

root.render(<Timer/>);