
const phones=[
    {name:"Iphone",price:"1000",image:"images/iphone1.png"},
    {name:"Samsung",price:"1100",image:"images/samsung.png"},
    {name:"Xiaomi",price:"600",image:"images/xiaomi.png"},
    {name:"Google-pixel",price:"950",image:"images/pixel.png"},
    {name:"OnePlus",price:"800",image:"images/oneplus.png"},
    {name:"Motorolla",price:"700",image:"images/motorola.png"},
    {name:"Nokia",price:"500",image:"images/nokia.png"},
    {name:"Oppo",price:"740",image:"images/oppo.webp"},
    {name:"Nothing Phone",price:"990",image:"images/nothing.webp"},
]


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            total: 0,
            isOpen:false
        };
    }

    addItem = (item) => {
        if (!this.state.items.some(existingItem => existingItem.name === item.name)) {
            this.setState(prevState => ({
                items: [...prevState.items, item],
                total: prevState.total + parseInt(item.price)
            }));
        } else {
            alert('Цей товар вже додано до корзини');
        }
    }

    toggleOpen = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        return (
            <div style={{position: 'fixed', top: '10px', right: '10px'}}>
                <button onClick={this.toggleOpen} style={{padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px'}}>Корзина</button>
                {this.state.isOpen && (
                    <div style={{border: '1px solid black', padding: '10px', backgroundColor: '#abaeae', marginTop: '10px'}}>
                        <h2>Корзина</h2>
                        {this.state.items.map((item, index) => (
                            <div key={index}>{item.name} - {item.price}</div>
                        ))}
                        <div>Загальна сума: {this.state.total}</div>
                    </div>
                )}
            </div>
        );
    }
}

class CardProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.data.name,
            price: this.props.data.price,
            image: this.props.data.image,
            btnpress:false,
            showNotification: false

        };
    }

    addProduct = () => {
        this.setState({btnpress:true},()=>{
            if(this.state.btnpress){
                this.props.onAdd(this.state);
                setTimeout(() => this.setState({ showNotification: true }), 100);
            }
        })
    }

    render() {
        return (
            <div style={{flex: '0 0 20%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '10px', padding: '10px', boxShadow: '0 4px 8px 0 rgba(0,120,0,0.9)', borderRadius: '5px'}}>
                <div style={{marginBottom: '10px', fontWeight: 'bold'}}>{this.state.name}</div>
                <div style={{marginBottom: '10px'}}>{this.state.price}</div>
                <div style={{marginBottom: '10px'}}><img src={this.state.image} alt={this.state.name} width="200" height="200" /></div>  
                <button onClick={this.addProduct} style={{padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px'}}>Додати в кошик</button>
                {this.state.showNotification && <div style={{ color: '#4CAF50', marginLeft: '10px' }}>Товар: {this.state.name} - додано до корзини</div>}
            </div>
        );
    }
}

class App extends React.Component {
    cartRef = React.createRef();

    handleAdd = (item) => {
        this.cartRef.current.addItem(item);
    }

    render() {
        return (
            <div>
                <Cart ref={this.cartRef} /><br />
                <h3 style={{ color: '#4CAF50', marginLeft: '10px' }}>Телефони</h3>
                <div style={{ display: 'flex', overflowX: 'scroll' }}>
                    {phones.map(phone => <CardProduct key={phone.name} data={phone} onAdd={this.handleAdd} />)}
                </div>
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);