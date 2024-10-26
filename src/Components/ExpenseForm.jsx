import React, { useState } from 'react';
import { useExpenses } from './ExpenseContext';

const ExpenseForm = () => {
    const { addExpense } = useExpenses();
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !amount || !date) {
            alert('Please fill in all fields.');
            return;
        }

        const newExpense = {
            id: Math.random().toString(), // Temporary unique ID
            name,
            amount: parseFloat(amount),
            date: new Date(date),
        };

        addExpense(newExpense);
        setName('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="expense-form">
            <input
                type="text"
                placeholder="Expense Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
