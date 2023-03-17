import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Alert from "./components/Alert";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import NoteState from './contexts/notes/NotesState';

function App() {



  return (
    <BrowserRouter>
    <NoteState>
      <Navbar/>
      <Alert />
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<SignUp />}/>
      </Routes>
    </NoteState>
    </BrowserRouter>
  );
}

export default App;
