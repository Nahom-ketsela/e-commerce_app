  import {useState} from 'react'
  import './App.css' ;
  import Navbar from './Components/Navbar/Navbar'
  import { BrowserRouter,Routes, Route } from 'react-router-dom';
  import { Link } from 'react-router-dom';
  import Shop from './pages/Shop';
  import ShopCategory from './pages/ShopCategory';
  import Product from './pages/Product';
  import Cart from './pages/Cart';
  import LoginSignup from './pages/LoginSignup'; 
  import { Footer } from './Components/footer/Footer';

    function App() {
      const [count, setCount] = useState(0)

      return (
        <>
          <div>
              <BrowserRouter>
              <Navbar/> 
              <Routes>
                <Route path='/' element= {<Shop/>} />
                <Route path='/households' element= {<ShopCategory category= "households"/>} />
                <Route path='/outdoors' element= {<ShopCategory  category= "outdoors"/>} />
                <Route path='/product' element= {<Product/>} >
                  <Route path=':productId' element= {<Product/>}/>
                  </Route>
                  
                  <Route path='/login' element= {<LoginSignup/>} />
                  <Route path='/cart' element= {<Cart/>} />
                  
              </Routes>
              <Footer/>
              </BrowserRouter>
              
          </div>
        </>
      )
    }

    export default App
