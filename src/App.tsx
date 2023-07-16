import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Summary from './components/Summary/Summary';
import Homepage from './components/Summary/Home';

function App() {
  return (
    <div className="App" style={{minHeight:"700px"}}>
      <BrowserRouter>
        <Routes>
            <Route path='/' Component={Homepage}></Route>
            <Route path='/summary' Component={Summary}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
