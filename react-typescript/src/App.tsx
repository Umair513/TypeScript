
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  
  
  return (
    <div className="App">
      
      <Oscar>
        <Heading>Oscar goes to Umair Ahmed</Heading>
      </Oscar>
      <Greet name="Umair Ahmed"  isLoggedIn={true}></Greet>
    </div>
  );
}

export default App;
