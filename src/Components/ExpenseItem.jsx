import React from 'react';
import { useExpenses } from './ExpenseContext';

const ExpenseItem = ({ expense }) => {
    const { deleteExpense } = useExpenses();

    return (
        <div className="expense-item">
            <p>
                {expense.name} - ${expense.amount.toFixed(2)} 
                <span> ({new Date(expense.date).toLocaleDateString()})</span>
            </p>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </div>
    );
};

export default ExpenseItem;
