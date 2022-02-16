import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Cart from './pages/Cart'
import Login from './pages/Login'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'



function App() {
  let user = true
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path= '/' element= {<Home/>}/>
            <Route path = '/product/' element = {<Product/>}/>
            <Route path= '/login' element= {user ? <Login/> : <Register/>}/>
            <Route path = '/register' element = {user ? <Login/> : <Register/>}/>
            <Route path= '/cart' element= {<Cart/>}/>
            <Route path = '/products/:category' element = {<ProductList/>}/>

          </Routes>
      </Router>
     {/* <ProductList/> */}
     {/* <Product/> */}
     {/* <Register/> */}
      {/* <Login/>  */}
     {/* <Cart/> */}
    </div>
  );
}

export default App;
