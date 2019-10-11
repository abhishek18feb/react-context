import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';

const App =()=> {
  return (
    <React.Fragment>
      <header>
        <h2>React Context API</h2>
      </header>
      <section>
        <article>
          <Product />
        </article>
        <Cart />
      </section>

      <footer>
        <p>Footer</p>
      </footer>
    </React.Fragment>
     
  );
}

export default App;
