import Productdetails from './compents/Productdetails';
import Productlist from './compents/ProductList';
import MenProducts from './compents/menClothing';
import WomenProducts from './compents/womenClothing';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'><button>Home page</button></Link>
        <Link to='/menclothing'><button>Men's Wear</button></Link>
        <Link to='/womenclothing'><button>Women's Wear</button></Link>
        <Routes>
          <Route path='/' element={<Productlist/>} />
          <Route path='/product/:id' element={<Productdetails />} />
          <Route path='/menclothing' element={<MenProducts/>}/>
          <Route path='/womenclothing' element={<WomenProducts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;