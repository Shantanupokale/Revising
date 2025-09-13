import React, { useState } from 'react';

const ExpenseTable = ({ expenses }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter logic
  const filteredExpenses = expenses.filter(
    (expense) => selectedCategory === "" || expense.category === selectedCategory
  );

  return (
    <div className="flex flex-col gap-6 px-4">
      {/* Dropdown filter */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">All</option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>

      <div className="flex justify-between">
        {/* Table 1: normal prop access */}
        <div>
          <table className="expense-table">
            <caption className="bg-orange-400">This is simple prop sending</caption>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.title}</td>
                  <td>{expense.category}</td>
                  <td>{expense.amount}</td>
                </tr>
              ))}
              <tr>
                <th>Total</th>
                <th></th>
                <th>
                  ₹
                  {filteredExpenses.reduce(
                    (sum, exp) => sum + Number(exp.amount),
                    0
                  )}
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 2: destructured props */}
        <div>
          <table className="expense-table">
            <caption className="bg-green-400 w-full">
              This is destructured prop sending
            </caption>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map(({ id, title, category, amount }) => (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{category}</td>
                  <td>{amount}</td>
                </tr>
              ))}
              <tr>
                <th>Total</th>
                <th></th>
                <th>
                  ₹
                  {filteredExpenses.reduce(
                    (sum, exp) => sum + Number(exp.amount),
                    0
                  )}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTable;
