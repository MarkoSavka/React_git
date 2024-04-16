// //useRef 
// function UserForm() 
// { 
//     const nameField=React.useRef(null); 
//     const send=()=>{ 
//         const inputElement=nameField.current; 
//         console.log("Name"+inputElement.value); 
//     } 
//     return(<div> 
//         <input ref={nameField}/> 
//         <button onClick={send}>Send</button> 
//     </div> 


 
//     ) 
// } 
// ReactDOM.createRoot(document.getElementById("app")).render(<UserForm/>)





//useRef 
// const root= ReactDOM.createRoot(document.getElementById("app")) 
// function UserForm() 
// { 
//     const [name,setName]=React.useState("PU221"); 
//     const nameRef=React.useRef(name); //зберігаємо посилання на змінну на все життя компонента

//     const changeName=(event)=>{ 
//         console.log(event.target.value) 
//         setName(event.target.value) 
//     } 

//     const unmount=()=>root.unmount() 

//     React.useEffect(()=>{
//       console.log("create effect1");
//       nameRef.current=name;
//     },[name]) //присвоювати посиланню змінну нейм при кожній зміні,тому що ,[name]
//     //буде спрацьовувати при кожному разі зміни name

//     React.useEffect(()=>{ 
//       console.log("create effect2");
//       const userName = localStorage.getItem("userName"); 
//       if(userName!==null) 
//       { 
//         setName(userName) 
 
//       } 
//       return()=>{  //це спрацьовує коли ви викликаємо root.unmount
//         console.log(nameRef.current); 
//         localStorage.setItem("userName",nameRef.current);
//       } 
//     },[]) 
 
     
//     return(<div> 
//         <h1></h1> 
//         <p> 
//             <p> 
//                 <input value={name} onChange={changeName}/> 
//                 <button onClick={unmount}>Unmount</button> 
//             </p> 
//         </p> 
//     </div> 
//     ) 
// } 
// root.render(<UserForm/>)



//Task
// const root= ReactDOM.createRoot(document.getElementById("app")) 

// function ShoppingList() 
// { 
//     const [items,setItems]=React.useState([]);
//     const [newItem,setNewItem]=React.useState("");
 
//     const handleChange=(event)=>{ 
//       setNewItem(event.target.value) 
//     } 

//     const addItem=()=>{
//       if(newItem.trim()!==''){
//         setItems([...items,newItem]) //спрет оператор(куди записую , і що записую) СетАйтем спровокує спрацювання useEffect,
//         //де є ,[items], бо він відслідковує зміни items а тут ми його якраз міняємо
//         setNewItem('');
//       }
//     }

//     React.useEffect(()=>{
//       const savedItems = localStorage.getItem('shoppingList');
//       if(savedItems){
//         setItems(JSON.parse(savedItems));
//       }
//     },[])

//     React.useEffect(()=>{
//       localStorage.setItem("shoppingList", JSON.stringify(items));
//     },[items])

//     const deleteItem=(index)=>{
//       if(index!=null){
//         const findItem= items.filter((value, i) => i !== index);
//         setItems(findItem);        
//       }
//     }
     
//     return(
//       <div>
//         <div>
//           <input value={newItem} onChange={handleChange} placeholder="Name:"></input>
//           <button onClick={addItem}>Add</button>
//         </div>
//         <ul>
//           {
//             items.map((item,index)=>(  //це як цикл, перетворення з одного в інше
//               <li key={index}>
//                 {item}
//                 <button onClick={() => deleteItem(index)}>Delete</button>
//               </li>
//             ))
//           }
//         </ul>
//       </div> 
//     ) 
// } 
// root.render(<ShoppingList/>)




//AJAX
//npm i json-server
//json-server start (мб така команда запуску джейсон сервера хз)
//const root= ReactDOM.createRoot(document.getElementById("app")) 

//class ItemsList extends React.Component{

//   constructor(props){
//     super(props);
//     this.state={items:[]};
//   }

//   componentDidMount(){ //useEffect
//     fetch("http://localhost:3000/items")  //робимо фетч запит
//     .then(response=>response.json())  //і робимо проміси
//     .then(data=>this.setState({items:data}))  //прочитали дані і записали
//     //npx json-server data.json
//   }

//   render() {
//     const { items } = this.state;
//     return (
//       <ul>
//         {
//           items.map(item => (
//             <li key={item.id}>
//               {item.name}-{item.price}
//             </li>
//           ))
//         }
//       </ul>
//     )
//   }
// }



//те саме лиш функціональний компонент
// const root = ReactDOM.createRoot(document.getElementById("app"))

// function ItemsList() {
//   const [items, setItems] = React.useState([]);

//   React.useEffect(()=>{ //перед рендером нам потрібен перше запит на сервер,тому useEffect
//     fetch("http://localhost:3000/items")  //робимо фетч запит
//     .then(response=>response.json())  //і робимо проміси
//     .then(data=>setItems(data))  //прочитали дані і записали
//   }),[] 

//   return (
//     <ul>
//       {
//         items.map(item => (
//           <li key={item.id}>
//             {item.name}-{item.price}
//           </li>
//         ))
//       }
//     </ul>
//   )
// }

// root.render(<ItemsList/>)




//work with webapi
const root = ReactDOM.createRoot(document.getElementById("app"))

function ItemsList() {
  const [items, setItems] = React.useState([]);

  React.useEffect(()=>{ //перед рендером нам потрібен перше запит на сервер,тому useEffect
    fetch("https://jsonplaceholder.typicode.com/comments")  //робимо фетч запит,функція фетч повертає проміс
    .then(response=>response.json())  //і робимо обробник проміса //fetch повертає проміс, який, коли виконується, видає об'єкт відповіді (response). Promise представляє завершення або невдачу асинхронної операції, і його можливий результат
    .then(data=>setItems(data))  //прочитали дані і записали. data - це результат попереднього проміса в ланцюжку, а саме response.json()
  }),[] 

  return (
    <ul style={{ listStyleType: 'none', padding: 0}}>
      {
        items.map(item => (
          <Item key={item.id} item={item}/>
        ))
      }
    </ul>
  )
}
function Item({item})
{
  return(
    <li style={{ border: '1px solid #ccc', borderColor: "black", margin: '10px 0', padding: '10px' }}>
    <p style={{ border: '1px solid #ccc', borderColor: 'green' }}>Name: {item.name}</p>
    <p style={{ border: '1px solid #ccc', borderColor: 'green' }}>Email: {item.email}</p>
    <p style={{ border: '1px solid #ccc', borderColor: 'green' }}>Body: {item.body}</p>
  </li>
  )
}

root.render(<ItemsList/>)

//githubCopilot:
// function ItemsList() {
//   const [items, setItems] = React.useState([]);
//   const [currentPage, setCurrentPage] = React.useState(1);
//   const [itemsPerPage, setItemsPerPage] = React.useState(10);

//   React.useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//       .then(response => response.json())
//       .then(data => setItems(data))
//   }, [])

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <ul style={{ listStyleType: 'none', padding: 0 }}>
//         {
//           currentItems.map(item => (
//             <Item key={item.id} item={item} />
//           ))
//         }
//       </ul>
//       <Pagination 
//         itemsPerPage={itemsPerPage} 
//         totalItems={items.length} 
//         paginate={paginate} 
//       />
//     </div>
//   )
// }

// function Item({ item }) {
//   return (
//     <li style={{ border: '1px solid #ccc', borderColor: "black", margin: '10px 0', padding: '10px' }}>
//       <p style={{ border: '1px solid #ccc', borderColor: 'green' }}>Name: {item.name}</p>
//       <p style={{ border: '1px solid #ccc', borderColor: 'green' }}>Email: {item.email}</p>
//       <p style={{ border: '1px solid #ccc', borderColor: 'green' }}>Body: {item.body}</p>
//     </li>
//   )
// }

// function Pagination({ itemsPerPage, totalItems, paginate }) {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center' }}>
//         {pageNumbers.map(number => (
//           <li key={number} style={{ margin: '0 10px' }}>
//             <a onClick={() => paginate(number)} href='!#' style={{ textDecoration: 'none' }}>
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }