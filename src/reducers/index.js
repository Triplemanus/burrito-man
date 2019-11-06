import { combineReducers } from 'redux';
import { orders } from './orders';
import { isLoading } from './isLoading';
import { errorMsg } from './errorMsg';

const rootReducer = combineReducers({
  orders,
  isLoading,
  errorMsg
});

export default rootReducer;
