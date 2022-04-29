import ItemContainer from './Containers/ItemContainer';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (<>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemContainer />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
