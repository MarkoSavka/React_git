let users =[
    {name:'Marko', age:'21', email:'myemail@gmail.com'},
    {name:'Ann', age:'25', email:'ann@gmail.com'},
    {name:'Dmytro', age:'19', email:'dmytro@gmail.com'},
    {name:'Andrew', age:'29', email:'andrew@gmail.com'}

];

class User extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            name: this.props.data.name,
            age: this.props.data.age,
            email: this.props.data.email,
        };
    }

    render()
    {
        return(
            <li style={{margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '5px'}}>
                <strong>Name:</strong> {this.state.name}<br/>
                <strong>Age:</strong> {this.state.age}<br/>
                <strong>Email:</strong> {this.state.email}<br/>
                <button onClick={()=>this.props.onDelete(this.state.name)}>Delete</button> 
            </li>)
            //анонімну стрілкову функцію як обробник події onClick
            // Ця функція викликає this.deleteUser з поточним ім'ям користувача як аргументом(проспом).
    }
}

class UserList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.data
        };
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    addUser(user) 
    {
        this.setState(prevState => ({
            users: [...prevState.users, user]
        }));
    }

    deleteUser(name) {
        this.setState(prevState => ({
            users: prevState.users.filter(user => user.name !== name)
        }));
    }

    render()
    {
        return(
            <div style={{width: '300px', margin: '0 auto'}}>
                <ul style={{listStyleType: 'none', padding: '0'}}>
                    {
                      this.state.users.map(user => 
                        <User key={user.name} data={user} onDelete={this.deleteUser} />)
                        //стрілочн ф-ція в якій результат виоразу автоматично повертається
                        //передаємо 2 пропси,у 2 передаємо в пропс доступ до методу deleteUser
                    }
                </ul>
                <AddUser onAddUser={this.addUser} /> 
{/*використовую проп onAddUser для передачі функції this.addUser в компонент AddUser.*/}
            </div>
        )
    }
}

const AddUser = (props) => {
    const [showForm, setShowForm] = React.useState(false);
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [email, setEmail] = React.useState('');

    const createForm = () => {
        setShowForm(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = { name, age, email };
        props.onAddUser(newUser); //тут ми по пропсу onAddUser доступаємось до методу addUser і передаємо
        //в нього newUser 
        setName('');
        setAge('');
        setEmail('');
        setShowForm(false);
    }

    return(
        <div>
            <button onClick={createForm}> Add new user</button>
            {showForm && 
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br/>
                <input type="text" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} /><br/>
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
                <button type="submit">Add</button>
            </form>
            }
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('app')).render(<UserList data={users}/>)