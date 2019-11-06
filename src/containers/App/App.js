import React from 'react';
import './App.css';
import OrderForm from '../../components/OrderForm/OrderForm';
import Orders from '../../components/Orders/Orders';

export const App = () => {

    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
        <OrderForm />
          <Orders />
        </header>
      </main>
    );
  }
  
  export default App;

