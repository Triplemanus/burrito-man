import React from 'react';
import './App.css';
import OrderForm from '../../components/OrderForm/OrderForm';

export const App = () => {

    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm />
        </header>
      </main>
    );
  }

export default App;

