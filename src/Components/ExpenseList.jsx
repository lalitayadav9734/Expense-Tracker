import React from 'react';
import { useExpenses } from './ExpenseContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses } = useExpenses();

    return (
        <div className="expense-list">
            {expenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                expenses.map(expense => (
                    <ExpenseItem key={expense.id} expense={expense} />
                ))
            )}
        </div>
    );
};

export default ExpenseList;
