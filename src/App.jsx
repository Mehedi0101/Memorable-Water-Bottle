import { useState } from 'react';
import './App.css';
import Bottles from './components/bottles/bottles';
import Cart from './components/cart/Cart';

function App() {

  const [addedItems, setAddedItems] = useState([]);

  return (
    <div>
      <h1 className='page-title'>Memorable Water Bottle</h1>
      <Cart addedItems={addedItems}></Cart>
      <Bottles addedItems={addedItems} setAddedItems={setAddedItems}></Bottles>
    </div>
  )
}

export default App
