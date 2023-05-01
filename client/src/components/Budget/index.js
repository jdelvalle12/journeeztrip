import React, { useState } from 'react';

function Budget() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const handleBudgetChange = (event) => {
    setBudget(Number(event.target.value));
  };

  const handleExpenseChange = (event, index) => {
    const newExpenses = [...expenses];
    newExpenses[index] = {
      ...newExpenses[index],
      [event.target.name]: event.target.value,
    };
    setExpenses(newExpenses);
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, { description: '', amount: 0 }]);
  };

  const handleRemoveExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );
  const remainingBudget = budget - totalExpenses;

  return (
    <div>
      <Navbar.Brand className='brand-name-profile text-4xl font-bold text-blue-800' href="/Profile">EZ</Navbar.Brand>
      <h1>Budget</h1>
      <form>
        <label>
          Budget:
          <input type="number" value={budget} onChange={handleBudgetChange} />
        </label>
      </form>
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="description"
                  value={expense.description}
                  onChange={(event) => handleExpenseChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="amount"
                  value={expense.amount}
                  onChange={(event) => handleExpenseChange(event, index)}
                />
              </td>
              <td>
                <button onClick={() => handleRemoveExpense(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{totalExpenses}</td>
            <td></td>
          </tr>
          <tr>
            <td>Remaining Budget</td>
            <td>{remainingBudget}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
}

export default Budget;