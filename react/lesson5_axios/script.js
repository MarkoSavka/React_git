
const URL="http://localhost:3000/products";

axios.create({
    baseURL:URL,
    headers:{
        "Content-type":"application/json"
    }
});
class DataService { 
    getAll() { 
      return http.get("/"); 
    } 
   
    get(id) { 
      return http.get(`/${id}`); 
    } 
   
    create(data) { 
      return http.post("/", data); 
    } 
   
    update(id, data) { 
      return http.put(`/${id}`, data); 
    } 
   
    delete(id) { 
      return http.delete(`/${id}`); 
    } 
   
    deleteAll() { 
      return http.delete(`/`); 
    } 
   
  }
  
class Product extends React.Component{
    render(){
        const {name}=this.props;
        return(
            <li>{name}</li>
        )
    }
}


class Search extends React.Component{ 
    constructor(props) 
    { 
        super(props); 
        this.search=this.search.bind(this); 
    } 
    search(e) 
    { 
      this.props.searchProducts(e.target.value); 
    } 
    render(){ 
        return( 
            <input onChange={this.search}/> 
        ) 
    } 
} 


class ProductList extends React.Component{
    render() { 
        const { filteredProducts, title, isLoading, error } = this.props.data; 
 
        if (error) { 
            return <p>{error.message}</p>; 
        } else if (isLoading) { 
            return <p>Loading ...</p>; 
        } else { 
            return ( 
                <div className="product-list"> 
                    <h1>{title}</h1> 
                    <ul> 
                        { 
                            filteredProducts.map(product => { 
                                return <Product key={product.id} name={product.name} /> 
                            }) 
                        } 
                    </ul> 
                </div> 
            ) 
        } 
    } 
}

//загальний компонент
class App extends React.Component { 
 
    constructor(props) { 
        super(props) 
 
        this.state = { 
            title: '', 
            items: [], 
            filteredProducts: [], 
            isLoading: false, 
            error: null, 
        }; 
        this.searchProducts = this.searchProducts.bind(this) 
    } 

 
    componentDidMount() { 
        // fetch(URL) //fetchAPI
        //   .then(response => { 
        //     if (response.ok) { 
        //       return response.json(); 
        //     } else { 
        //       throw new Error('Something went wrong ...'); 
        //     } 
        //   }) 
        //   .then(data => this.setState({ 
        //     title: data.title, 
        //     items: data.items, 
        //     filteredProducts: data.items, 
        //     isLoading: false 
        // })) 
        //   .catch(error => this.setState({ 
        //     error, 
        //     isLoading: false 
        // })); 


        //реалізація за допомогою ліби яку ми проставили(Axios)
        //перевага-ця ліба менш вразлива до різного типу атак
        axios.get(URL)
           .then(response => { 
            if (response.status===200) { 
              return response.data;  //тут дані є автоматично в json форматі,тому як фетчом їх непотрібно додатково перетворювати
            } else { 
              throw new Error('Something went wrong ...'); 
            } 
          }) 
          .then(data => this.setState({ 
            title: data.title, 
            items: data.items, 
            filteredProducts: data.items, 
            isLoading: false 
        })) 
          .catch(error => this.setState({ 
            error, 
            isLoading: false 
        })); 
      } 


      searchProducts(text) { 
        let filteredProducts = this.state.items.filter( 
            product => product.name.includes(text) 
        ) 
        this.setState({ 
            filteredProducts 
        }) 
    } 
 
    render() { 
        return ( 
            <div id="app"> 
                <Search searchProducts={this.searchProducts} /> 
                <ProductList data={this.state} /> 
            </div> 
        ) 
    } 
} 

ReactDOM.render( 
    <App />, 
    document.getElementById('app') 
)