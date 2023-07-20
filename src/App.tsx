import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Summary from './components/Summary/Summary';
import NamedEntities from './components/NamedEntities';
import Homepage from './components/Summary/Home';

function App() {
  return (
    <div className="App" style={{minHeight:"700px"}}>
      <BrowserRouter>
        <Routes>
            <Route path='/' Component={Homepage}></Route>
            <Route path='/summary' Component={Summary}></Route>
            <Route path='/namedentities' Component={NamedEntities}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
