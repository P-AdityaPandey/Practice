
import './App.css'
import Counter from "./components/counter/Counter"
import Switchcard from "./components/switchcard/Switchcard"
import Navbar from "./components/navbar/Navbar"
import Products from './components/products/Products'
import Home from './components/home/Home'
import { Route } from 'react-router-dom'


function App() {
 

  return (
    <div className='app'>

    <Navbar />
    <Routes>
    <Route path={"/"} element={<Home/>} />
    <Route path={"/products"} element={<Products/>} />
    <Route path={"/counters"} element={<Counter/>} />
    <Route path={"/switchcard"} element={<Switchcard/>} />


    </Routes>

    
    </div>
     
  )
}


export default App;
