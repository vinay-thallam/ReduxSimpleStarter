import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book'
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  books : BooksReducer,
  activeBook : ActiveBookReducer,
  weather : WeatherReducer
});

export default rootReducer;
