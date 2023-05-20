import './App.css';
import { Routes, Route } from 'react-router-dom';
import Books from './Components/Book';
import Categories from './Components/Categories';
import Nav from './Components/Nav';

const App = () => (

  <>
    <Nav />
    <div className="app">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </>
);
export default App;
