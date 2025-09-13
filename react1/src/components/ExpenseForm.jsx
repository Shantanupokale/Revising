import React, { useState } from "react";

const ExpenseForm = ({setExpenses}) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  // Handles typing/selecting
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handles submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
    id: crypto.randomUUID(),  // unique ID for each expense
    ...formData,              // copy the title, category, and amount from formData
  };

      setExpenses((prev) => [...prev, newExpense]);
    console.log("Submitted Data:", formData);


    setFormData({
      title: "",
      category: "",
      amount: "",
    });
  };

  return (
    <div className="w-2/5">
      <form className="expense-form" onSubmit={handleSubmit}>
        {/* Title */}
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="border w-full"
          />
        </div>

        {/* Category */}
        <div className="input-container">
          <label htmlFor="category" className="block mb-1">
            Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="">Select Category</option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>

        {/* Amount */}
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            className="border w-full"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="add-btn border w-1/2 bg-gray-500 text-white rounded mt-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
