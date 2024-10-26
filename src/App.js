import React from 'react';
import { ExpenseProvider } from './Components/ExpenseContext';
import ExpenseList from './Components/ExpenseList';
import ExpenseForm from './Components/ExpenseForm';
import './App.css'; // Import CSS for styling

const App = () => {
    return (
        <ExpenseProvider>
           
                <h1>Expense Tracker</h1>
                <ExpenseForm />
                <ExpenseList />
          
        </ExpenseProvider>
    );
};

export default App;
