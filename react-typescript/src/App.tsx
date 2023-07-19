
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import  User  from "./components/context/User"
import { Counter } from './components/class/Counter';

function App() {
  
  
  return (
    <div className="App">
      <Counter message='The Count Value is '></Counter>
    </div>
  );
}

export default App;
