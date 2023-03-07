import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './contexts/notes/NotesState';

function App() {
  return (
    <NoteState>
      <div className="App">
        <Navbar />
        <About/>
      </div>
    </NoteState>
  );
}

export default App;
