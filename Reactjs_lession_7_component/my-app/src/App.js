import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import AddComponent from './Components/AddComponent';

// function App() {
//     return (
//       <div className="App">
//         <Welcome name="Hải Giò" />
//       </div>
//     );
// }

function App() {
  return (
      <AddComponent firstNumber={10} secondNumber={2} />
  );
}

export default App;
