import './App.css';
import NavBar from './components/navBar';
import MoviesList from './components/moviesList';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MoviePage from './components/moviePage';
import BookForm from './components/BookForm';

function App() {
  return (
    <Router>
    <>
    <NavBar/>
    <Routes>
            <Route exact path="/" element = {<MoviesList/>}/>
            <Route path="/:id/bookingForm" element = {<BookForm/>}/>
            <Route path="/:id" element = {<MoviePage/>}/>
            
    </Routes> 

    </>
 </Router>
  );
}

export default App;
