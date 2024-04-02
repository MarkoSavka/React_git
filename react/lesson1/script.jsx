//1
// ReactDOM.createRoot(document.getElementById('app')).render(
// <h1>10+2={10+2}</h1>
// )



//2
// const user={ //описав обʼєкт юзер
//     id:1,
//     firstName:"firstName1",
//     lastName:"lastName1",
//     age:22,

//     getFullName:function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// const userClassName='user-info';
// const styleOnj={
//     color:'blue',
//     fontFamily:'Verdana',
//     backgroundColor:'yellow'
// };

// ReactDOM.createRoot(document.getElementById('app')).render( 
//     <div className={userClassName} style={styleOnj} id={user.id}> 
//         <p> FullName {user.getFullName()}</p> 
//         <p>Age:{user.age}</p> 
//         <p>Time: {new Date().toLocaleTimeString()}</p> 
//     </div> 
// );



//3
// ReactDOM.createRoot(document.getElementById('app-header')).render(
//     <h1>Product App</h1>
// )

// ReactDOM.createRoot(document.getElementById('items-container')).render(
//     <div id="products">
//         <h1>Product List</h1>
//         <ul>
//             <li>Phone</li>
//             <li>Tablet</li>
//             <li>Laptop</li>
//             <li>PC</li>
//         </ul>
//     </div>
// )



//4 Components
//зараз компонента як функція(компонента має бути з великої букви!!!)
// function Hello()
//{
//     return <h1>Hello PU221</h1>
// }

// ReactDOM.createRoot(document.getElementById('app')).render(<Hello/>);



//5 Props-проперті,передача параметрів в компоненту
//Функціональний підхід до створення компоненти
// function Hello(props)
// {
//     return (
//         <div>
//             <p>Name:{props.name}</p>
//             <p>Age:{props.age}</p>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('app')).render(<Hello name="abb" age="33"/>);



//6 Class
// class Hello extends React.Comnponent
// {
//     render() 
//     {
//         return (
//             <div>
//                 <p>Name:{this.props.name}</p>
//                 <p>Age:{this.props.age}</p>
//             </div>
//         )
//     }
// }
// ReactDOM.createRoot(document.getElementById('app')).render(<Hello name="abb" age="33"/>);



//7 стрілочна ф-ція
// const Hello=(props)=>{
//     const {name,age}=props; //декомпозиція обʼєкта
//     return(
//         <div>
//             <p>Name:{name}</p>
//             <p>Age:{age}</p>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('app')).render(<Hello name="abb" age="33"/>);



//8 defaultProps
// class Hello extends React.Comnponent
// {
//     render() 
//     {
//         return (
//             <div>
//                 <p>Name:{this.props.name}</p>
//                 <p>Age:{this.props.age}</p>
//             </div>
//         )
//     }
// }
// Hello.defaultProps={name:'No name',age:0}; //

// ReactDOM.createRoot(document.getElementById('app')).render(<Hello name="abb" age="33"/>);



//9 Обробник подій(кемл нотації)
// function Button(props)
// {
//     function handleClick() //обробник кліку
//     {
//         alert('Clicked');
//     }
//     return <button onClick={handleClick}>Click</button>;
// }


//9 Tе саме лише через клас
// class Button extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         //якшо ми використовуємо клас,то
//         //this не передається в ф-цію обробника
//         //для того потрібно робити байнд
//         this.handleClick=this.handleClick.bind(this);
//     }
//     handleClick()
//     {
//         console.log(this);
//         alert('Clicked');
//     }
//     render()
//     {
//         return <button onClick={this.handleClick}>Click</button>;
//     }
// }




// 10 отримання інфи від події
// function Button(props)
// {
//     function handleClick(e)
//     {
//         console.log(e);
//         alert('Clicked');
//     }
//     return <button onClick={handleClick}>Click</button>;
// }



// 11 передача параметрів в обробник події
// function ButtonGroup(props)
// {
//     function printInfo(name,age)
//     {
//         console.log(`Name: ${name} ,Age: ${age}`)
//     }
//     return ( 
//     /*обробник викликаємо через стрілочну функцію
//     () - це по суті і є обробник але пустий,який викликає функцію
//     printInfo,тому тут по факту обробником є пуста стрілочна ф-ція
//     */
//         <div> 
//             <button onClick={()=>printInfo('Ann',15)}>Print Ann</button>
//             <button onClick={()=>printInfo('Andrew',21)}>Print Andrew</button>
//         </div>
//     );
// }


//11 те саме лиш через клас
// class ButtonGroup extends React.Component
// {
//     constructor(props)
//     {
//         super(props); //в батьк клас передаєм пропси
//         this.printInfo=this.printInfo.bind(this);
//     }
//     printInfo(name,age) 
//     {
//         console.log(`Name: ${name} ,Age: ${age}`); 
//     }
//     render()
//     {
//         return(
//             <div> 
//             <button onClick={()=>this.printInfo('Ann',15)}>Print Ann</button>
//             <button onClick={()=>this.printInfo('Andrew',21)}>Print Andrew</button>
//         </div>  
//         );
//     }
// }



//11 Create react app(CRA) with terminal



//рендеримо тепер кнопку,відмальовую компоненту
ReactDOM.createRoot(document.getElementById('app')).render(<ButtonGroup/>);

