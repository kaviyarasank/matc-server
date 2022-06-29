# Usage

import Button from 'button-componentss/dist/button';
import './App.css';

function App() {
  const handleClick=()=>{
    alert("hai")
  }
  return (
    <div className="App">
     <Button name="Add" onClick={handleClick} />
    </div>
  );
}

export default App;
