
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: "Bruce",
    last: "wayne"
  }
  const nameList = [
    {
      first: "bruce",
      last: "wayne",
    },
    {
      first: "Adam",
      last: "Milne",
    },
    {
      first: "Trent",
      last: "Boult",
    },
  ];
  return (
    <div className="App">
      <Greet name="Umair Ahmed" messageCount={20} isLoggedIn={false} ></Greet>
      <Person name={personName}></Person>
      <PersonList names={nameList}></PersonList>
    </div>
  );
}

export default App;
