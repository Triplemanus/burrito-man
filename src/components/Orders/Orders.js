import React from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOrders, isLoading } from '../../actions';
import { getOrders } from '../../apiCalls';
import OrderForm from '../../components/OrderForm/OrderForm';

export class Orders extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  componentDidMount() {
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }

  render () {
    const orderEls = this.props.orders.map(order => {
      return (
        <div className="order">
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map(ingredient => {
              return <li>{ingredient}</li>
            })}
          </ul>
        </div>
      )
    });

    return (
        <main className="App">
          <header>
            <h1>Burrito Builder</h1>
            <OrderForm />
          </header>
          <section>
          { orderEls.length ? orderEls : <p>No orders yet!</p> }
          </section>
          
        </main>
    
    )
  }
}

export const mapStateToProps = ({ orders }) => ({
  orders: orders
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setOrders,
    isLoading
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);