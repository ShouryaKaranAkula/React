import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button2 from './buttons';

function App() {
  return (
    <>
      <div className="App" style={{ backgroundColor: user.bg_clr, color: user.clr }}>
        <h1>Hello React</h1>
        <h2>{user.name}</h2>
        <h3>{user.goal}</h3>
        <Conditions />
        <Products />
      </div>
      <Button2 />
      <Button/>
      <Button/>
    </>
  );
}

const user = {
  name: 'Shourya Karan',
  goal: 'To complete React like anything',
  bg_clr: 'black',
  clr: 'white'
}


function Conditions() {                    //condition are same as JS Syntax
  const value = 20;
  const actual = 10;

  const result = value > actual ? 'True' : 'False';
  return (
    <div>
      {result}
    </div>
  )
}


function Products() {
  const product = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ]

// var fruits = product[0].isFruit;

// if(fruits == 'true'){

// }

  const listItems = product.map(function (product) {
    return (
      <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen', listStyleType: 'none', marginLeft: '0%' }}>
        {product.title}
      </li>
    )
  });

  return (
    <ul>{listItems}</ul>
  )
}

function Buttons() {

  function handleClick(){
    alert("You clicked me !")
  }
  return (

    <>
    <button onClick={handleClick} style={{margin : 'auto', alignItems:'center'}}>Click here</button>
    <Button/>
    </>
  )
}

function Button() {
  const [count, setCount ] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default App;
