import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description ="Empty dishwasher" > </Task>
      <Task title="Laundry" deadline="Tomorrow" description="Fold Laundry and put away"> </Task>
      <Task title="Tidy" deadline="Today" > </Task>
      <Task title="Register" deadline="28th of September" description="Register for 3rd Year when the site decides to work"></Task>
    </div>
  );
}

export default App;
