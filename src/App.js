import { Route ,Routes } from 'react-router-dom';
import './App.css';
import Movies from './components/movies/Movies';
import Header from './components/Headers';
import Home from './components/Home';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
