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



//9