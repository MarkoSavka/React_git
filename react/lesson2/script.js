
/*class Hello extends React.Component 
{ 
    constructor(props) 
    { 
        super(props); 
        this.state={welcome:'Hi PU221'} 
 
    } 
    render() 
    { 
        return <h1>{this.state.welcome}</h1> 
    } 
 
 
} */
 


//state with button
// class ClickButton extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         //this.state={class:"off",label:'click'};
//         this.state={counter:0};

//         this.press=this.press.bind(this);
//     }

//     //2
//     incrementCounter(prevState,props)
//     {
//         return {
//             counter:prevState.counter+parseInt(props.increment)
//         }
//     }

//     press()
//     {
//         //alert('777');

//         let className=(this.state.class==="off")?"on":"off";

//         //this.setState({class:className});

//         // this.setState({counter:this.state.counter+parseInt(this.props.increment)});
//         // this.setState({counter:this.state.counter+parseInt(this.props.increment)});

//         //2
//         this.setState(this.incrementCounter);
//         this.setState(this.incrementCounter);

//         //3
//         // this.setState((prevState,props)=>{     return {
//         //     counter:prevState.counter+parseInt(props.increment)
//         // }});
//         // this.setState((prevState,props)=>{     return {
//         //     counter:prevState.counter+parseInt(props.increment)
//         // }});
//     }

//     render()
//     {
//         //якшо дані не передаємо то обробник можна викликати так:
//         //onClick={this.press}
//         //якшо передаємо то лямбда ф-цією:
//         //onClick={()=>this.press('999')} 
//        // return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
    
//        return(
//         <div>
//         <button onClick={this.press}>Click</button>
//         <p>{this.state.counter}</p>
//         </div>
//        )
//     }
// }



//життєвий цикл компоненти
// class ClickButton extends React.Component { 
         
//     constructor(props) { 
//         super(props) 
//         this.state = {class: "off", label: "Click"} 
             
//         this.press = this.press.bind(this) 
             
//         console.log("constructor") 
//     } 
//     static getDerivedStateFromProps(props, state) { 
//         console.log("getDerivedStateFromProps()") 
//         return null 
//     } 
//     componentDidMount(){ 
//         console.log("componentDidMount()") 
//     } 
//     componentWillUnmount(){ 
//         console.log("componentWillUnmount()") 
//     } 
//     shouldComponentUpdate(){ 
//         console.log("shouldComponentUpdate()") 
//         return true; 
//     } 
//     getSnapshotBeforeUpdate(prevProps, prevState) { 
//         console.log("getSnapshotBeforeUpdate()") 
//         return null; 
//     } 
//     componentDidUpdate(){ 
//         console.log("componentDidUpdate()") 
//     } 
//     press(){ 
//         var className = (this.state.class==="off")?"on":"off" 
//         this.setState({class: className}) 
//     } 
//     render() { 
//         console.log("render()") 
//         return <button onClick={this.press} className={this.state.class}>{this.state.label}</button> 
//     } 
// }
//ReactDOM.createRoot(document.getElementById('app')).render(<ClickButton increment="1"/>)


//
// class Clock extends React.Component 
// { 
//     constructor(props) 
//     { 
//         super(props); 
//         this.state={date:new Date(),name:"PU221"}; 
 
//     } 
//     render(){ 
//         return( 
//             <div> 
//                 <h1> Hi {this.state.name}</h1> 
//                 <h2>Now Time:{this.state.date.toLocaleTimeString()}</h2> 
                 
//             </div> 
//         ) 
//     } 
// } 
 
 
// ReactDOM.createRoot(document.getElementById('app')).render(<Clock/>)




// ReactDOM.createRoot(document.getElementById('app')).render(<Clock/>)

// class Clock extends React.Component 
// { 
//     constructor(props) 
//     { 
//         super(props); 
//         this.state={date:new Date(),name:"PU221"}; 
//         console.log("constructor"); 
 
//     } 
//     tick() 
//     { 
//         this.setState({date:new Date()}); 
//     } 
//     componentDidMount() 
//     { 
//         this.timerId=setInterval( 
//             ()=>this.tick(), 
//             1000 
//         ); 
//         console.log("componentDidMount"); 
//     } 
//     render(){ 
//         console.log("render"); 
//         return( 
//             <div> 
//                 <h1> Hi {this.state.name}</h1> 
//                 <h2>Now Time:{this.state.date.toLocaleTimeString()}</h2> 
                 
//             </div> 
//         ) 
//     } 
// } 
 



// const root= ReactDOM.createRoot(document.getElementById('app')); 
// class Clock extends React.Component 
// { 
//     constructor(props) 
//     { 
//         super(props); 
//         this.state={date:new Date(),name:"PU221"}; 
//         this.unmount=this.unmount.bind(this); 
//         console.log("constructor"); 
 
//     } 
//     tick() 
//     { 
//         this.setState({date:new Date()}); 
//     } 
//     componentDidMount() 
//     { 
//         this.timerId=setInterval( 
//             ()=>this.tick(), 
//             1000 
//         ); 
//         console.log("componentDidMount"); 
//     } 
//     unmount() 
//     { 
//       root.unmount(); 
//     } 
//     render(){ 
//         console.log("render"); 
//         return( 
//             <div> 
//                 <h1> Hi {this.state.name}</h1> 
//                 <h2>Now Time:{this.state.date.toLocaleTimeString()}</h2> 
//                 <button onClick={this.unmount}>Unmount</button> 
//             </div> 
//         ) 
//     } 
// } 
// root.render(<Clock/>);




// class Item extends React.Component 
// { 
//     render() 
//     { 
//         return <li>{this.props.name}</li> 
//     } 
// } 
 
// class ListItem extends React.Component 
// { 
//    render() 
//    { 
//     return( 
//         <div> 
//             <h1>{this.props.title}</h1> 
//             <ul> 
//                 <Item name="Student1"/> 
//                 <Item name="Student2"/> 
//                 <Item name="Student3"/> 
//             </ul> 
//         </div> 
//     ) 
//    } 
// } 
 
// ReactDOM.createRoot(document.getElementById('app')).render(<ListItem title="Students"/>)





// const propsValues = { 
//     title: "Students", 
//     items: [ 
//         "Student1", 
//         "Student2", 
//         "Student3" 
//     ] 
// } 
 
// class Item extends React.Component { 
//     render() { 
//         return <li>{this.props.name}</li> 
//     } 
// } 
 
// class ListItem extends React.Component { 
//     render() { 
//         return ( 
//             <div> 
//                 <h1>{this.props.data.title}</h1> 
//                 <ul> 
//                    { 
//                     this.props.data.items.map(function(item) 
//                     { 
//                         return <Item name={item}/> 
//                     }) 
//                    } 
//                 </ul> 
//             </div> 
//         ) 
//     } 
// } 
 
// ReactDOM.createRoot(document.getElementById('app')).render(<ListItem data={propsValues} />)





// const propsValues = { 
//     title: "Список смартфонів", 
//     items: [ 
//         "Samsung Galaxy Note20",  
//             "Apple iPhone 12 Pro",  
//             "Google Pixel 5",  
//             "Huawei P40 Pro",  
//             "OnePlus 8 Pro",  
//             "Asus Zenfone 7 Pro" 
//     ] 
// } 
// class Search extends React.Component{ 
//     constructor(props) 
//     { 
//         super(props); 
//         this.onTextChange=this.onTextChange.bind(this); 
 
//     } 
//     onTextChange(e) 
//     { 
//        let text=e.target.value.trim(); 
//        this.props.filter(text); 
//     } 
//     render() 
//     { 
//         return <input placeholder="Search" onChange={this.onTextChange}/> 
//     } 
// } 
 
// class Item extends React.Component { 
//     render() { 
//         return <li>{this.props.name}</li> 
//     } 
// } 
 
// class ListItem extends React.Component { 
//     constructor(props) 
//     { 
//         super(props); 
 
//         this.filterList=this.filterList.bind(this); 
//     } 
 
//     filterList(text) 
//     { 
//         alert(text); 
//        let filteredList= this.props.data.items.filter(function(item){ 
//             return item.toLowerCase().search(text.toLowerCase())!==-1 
//         }) 
//         alert(filteredList); 
 
 
 
//     } 
//     render() { 
//         return ( 
//             <div> 
//                 <h1>{this.props.data.title}</h1> 
//                 <Search filter={this.filterList}/> 
//                 <ul> 
//                    { 
//                     this.props.data.items.map(function(item) 
//                     { 
//                         return <Item name={item}/> 
//                     }) 
//                    } 
//                 </ul> 
//             </div> 
//         ) 
//     } 
// } 
 
// ReactDOM.createRoot(document.getElementById('app')).render(<ListItem data={propsValues} />)




// const propsValues = { 
//     title: "Список смартфонів", 
//     items: [ 
//         "Samsung Galaxy Note20",  
//             "Apple iPhone 12 Pro",  
//             "Google Pixel 5",  
//             "Huawei P40 Pro",  
//             "OnePlus 8 Pro",  
//             "Asus Zenfone 7 Pro" 
//     ] 
// } 
// class Search extends React.Component{ 
//     constructor(props) 
//     { 
//         super(props); 
//         this.onTextChange=this.onTextChange.bind(this); 
 
//     } 
//     onTextChange(e) 
//     { 
//        let text=e.target.value.trim(); 
//        this.props.filter(text); 
//     } 
//     render() 
//     { 
//         return <input placeholder="Search" onChange={this.onTextChange}/> 
//     } 
// } 
 
// class Item extends React.Component { 
//     render() { 
//         return <li>{this.props.name}</li> 
//     } 
// } 
 
// class ListItem extends React.Component { 
//     constructor(props) 
//     { 
//         super(props); 
//         this.state={items:this.props.data.items} 
 
//         this.filterList=this.filterList.bind(this) 
//     } 
 
//     filterList(text) 
//     { 
        
//        let filteredList= this.props.data.items.filter(function(item){ 
//             return item.toLowerCase().search(text.toLowerCase())!==-1 
//         }) 
//         this.setState({items:filteredList}) 
        
 
 
 
//     } 
//     render() { 
//         return ( 
//             <div> 
//                 <h1>{this.props.data.title}</h1> 
//                 <Search filter={this.filterList}/> 
//                 <ul> 
//                    { 
//                     this.state.items.map(function(item) 
//                     { 
//                         return <Item name={item}/> 
//                     }) 
//                    } 
//                 </ul> 
//             </div> 
//         ) 
//     } 
// } 
 
ReactDOM.createRoot(document.getElementById('app')).render(<ListItem data={propsValues} />)