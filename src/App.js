import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PlayerItem from "./components/PlayerItem";
import Navigation from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import playerData from "./assets/player-data.json";



function App() {

  const [type, setType] = useState("All");
  const [cart, setCart] = useState({}); // initialize an empty map
  const [list, setList] = useState([]); // initialize an empty array

  const selectFilterType = eventKey => {
    setType(eventKey);
};

  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if(type === "All") {
        return true
    } else if (type === item.type) {
        return true
    } else {
        return false
    }
  }

  // TODO: Write filter function

  return (
    <div className="App">
      <Navigation onSelect={selectFilterType}></Navigation>
      <header className="App-header">
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
