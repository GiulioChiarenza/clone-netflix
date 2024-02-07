import './App.css';
import Footer from '../src/components/Footer';
import  Navbar  from '../src/components/Navbar';
import Body from '../src/components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TVShows from './components/TVShows';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
   <>
   <Navbar></Navbar>
   <Routes>
    <Route element={<Body></Body>} path='/'/>
    <Route element={<TVShows></TVShows>} path='/TVShows'/>
    <Route element={<MovieDetails></MovieDetails>} path='/MovieDetails/:movieID'/>

   
   {/* <Body></Body> */}
   </Routes>
<Footer></Footer>
   </>
   </BrowserRouter>
  );
}


export default App;
