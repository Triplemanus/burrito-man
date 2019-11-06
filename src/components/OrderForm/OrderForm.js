import React, { Component } from 'react';
import { postOrders } from '../../apiCalls';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addOrders, isLoading, hasErrored } from '../../actions/index';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ingredients: [...this.state.ingredients, e.target.name]});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.saveOrders(e);
    this.clearInputs();
  }


  saveOrders = async (e) => {
    const { addOrders, isLoading, hasErrored } = this.props;
    e.preventDefault();
    try {
      isLoading(true);
      const order = await postOrders({ id: Date.now(), ...this.state,  })
      addOrders({  order })
      isLoading(false);
    } catch ({ message }) {
      isLoading(false);
      hasErrored(message)
    }
  };

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

       {this.state.ingredients[0] &&  <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>}
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    isLoading,
    hasErrored,
    addOrders
  }, dispatch)
)
export default connect(null, mapDispatchToProps)(OrderForm)