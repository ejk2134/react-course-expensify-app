import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={'$5.00'}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with more than one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={'$5.00'}/>);
    expect(wrapper).toMatchSnapshot();
});