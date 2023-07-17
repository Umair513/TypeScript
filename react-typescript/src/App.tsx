
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  
  
  return (
    <div className="App">
      <Button handleClick={(event, id) => {
        alert("Button Clicked")
      }}></Button>
      <Input value='' handleChange={event => console.log(event)}></Input>
    </div>
  );
}

export default App;
