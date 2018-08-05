import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

console.log(store.getState());
store.dispatch(addExpense({ 
    description: 'Water bill',
    amount: 500,
    createdAt: 20 
}));
store.dispatch(addExpense({ 
    description: 'Gas bill',
    amount: 200,
    createdAt: 30
}));
store.dispatch(addExpense({ 
    description: 'Rent',
    amount: 109500
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));