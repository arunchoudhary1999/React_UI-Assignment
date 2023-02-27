import './App.css';
import Create from './components/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Read from './components/Read';
import Edit from './components/Edit';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Read />} ></Route>
        <Route exact path='/create' element={<Create />} ></Route>
        <Route exact path='/edit' element={<Edit />} ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
