import React, {useState} from 'react';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import uuid from "uuid/v4"

import './App.css';

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 }
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses)
  console.log(expenses)


  return (
    <>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
      </>
  );
}

export default App;
