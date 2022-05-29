import './App.css';
import react from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import Error from "./pages/Error"
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">

      <Routes>

      <Route  path="/" element={ <Home /> } />
      <Route path="/beers" element={ <AllBeers /> } />
      <Route path="/beers/:beerId" element={ <BeerDetails /> } />
      <Route path="/random-beer" element={ <RandomBeer /> } />
      <Route path="/new-beer" element={ <NewBeer /> } />

      {/* error routes */}
      <Route path="/error" element={ <Error /> } />

      </Routes>

    </div>
  );
}

export default App;
