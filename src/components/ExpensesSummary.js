import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
    <div>
        <p>Viewing {expenseCount} {expenseCount === 1 ? 'item' : 'items'} totalling {expensesTotal}</p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
        expensesTotal: numeral(getExpensesTotal(getVisibleExpenses(state.expenses, state.filters)) / 100).format('$0,0.00')
    };
};

export default connect(mapStateToProps)(ExpensesSummary);