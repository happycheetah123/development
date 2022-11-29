import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PlayerItem from "./components/PlayerItem";
import Navigation from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import playerData from "./assets/player-data.json";



function App() {

  const [position, setPosition] = useState("All");
  const [allpro, setAllpro] = useState("All");
  const [sort, sortPrice] = useState("Off");
  const [cart, setCart] = useState({}); // initialize an empty map
  const [total, setTotal] = useState([]); // initialize an empty array
  const [price, setPrice] = useState(0); // initialize an empty array

  const reset = item => {
     setPosition("All")
     setAllpro("All")
     sortPrice("Off")
     setCart({})
     setTotal([])
     setPrice(0)
  }
  
  const selectPosition = eventKey => {
    setPosition(eventKey);
  };

  const selectAllpro = eventKey => {
    setAllpro(eventKey);
  };

  const selectSort = eventKey => {
    sortPrice(eventKey);
  };

  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if(position === "All") {
        return true
    } else if (position === item.position) {
        return true
    } else {
        return false
    }
  }

  const matchesAllpro = item => {
    // all items should be shown when no filter is selected
    if(allpro === "All") {
        return true
    } else if (allpro === item.allpro) {
        return true
    } else {
        return false
    }
  }

  const matchesSort = (a,b) => {
    // all items should be shown when no filter is selected
    if(sort === "Off") {
        return
    } else if (sort === "On") {
        return a.price - b.price
    }
  }

  const filteredData = playerData.filter(matchesFilterType)
  const filteredData2 = filteredData.filter(matchesAllpro)
  // const sortedData = filteredData2.sort((a, b) => a.price - b.price)
  const sortedData = filteredData2.sort(matchesSort)

  const addToCart = (item) => {
    const newCart = { ...cart };
    newCart[item] = (newCart[item] || 0) + 1;
    setCart([...cart, item])
  }

  const removeFromCart = (item) => {
    const newlist = [...total].filter((element) => element.name !== item.name)
    setTotal(newlist)
    const initialValue = 0;
    const prices = newlist.map((item) => item.price)
    const sumWithInitial = prices.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    setPrice(sumWithInitial)
  }

  const addToTotal = (item) => {
    const newlist = [...total, item]
    setPrice(price + item.price)
    setTotal(newlist)
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>
            <h1>Players</h1> {/* TODO: personalize your bakery (if you want) */}

        </div>
      </header>
      <body>
        <Navigation selectPosition={selectPosition} selectAllpro={selectAllpro} sortPrice={selectSort}></Navigation>
        <div className='format'>
          <div className='PlayerData'>
                  {sortedData.map((item, index) => ( // Map playerData to PlayerItem components
                    <PlayerItem name={item.name} position={item.position} price={item.price} allpro={item.allpro}
                                image={item.image} addToCart={addToCart} addToTotal={addToTotal} isInCart={false}>
                    </PlayerItem>
                  ))}
            </div>
            
            <div className='CartData'>
            <h1>Cart</h1>
              <button className='resetButton' onClick={() => {
                      reset()
                  }}>
                  Reset
              </button>
            {total.map((item, index) => ( // Map playerData to PlayerItem components
                    <PlayerItem name={item.name} position={item.position} price={item.price} allpro={item.allpro}
                                image={item.image} addToCart={addToCart} addToTotal={addToTotal} removeFromCart={removeFromCart} isInCart={true}>
                    </PlayerItem>
                  ))}
                  <p>Total Price: {price}</p>
            </div>
        </div>
        
      </body>
    </div>
  );
}

export default App;
