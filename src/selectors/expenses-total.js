export default (expenses) => {
    const reducer = (acc, cur) => acc + cur;
    let amounts = expenses.map((expense) => expense.amount);
    return amounts.reduce(reducer, 0);
};