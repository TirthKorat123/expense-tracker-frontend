import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Dashboard from './Components/Dashboard';
import AddExpense from './Components/AddExpense';
import About from './Components/About';
import ExpenseHistory from './Components/ExpenseHistory';
import CategoryWiseExpense from './Components/CategoryWiseExpense';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='addexpense' element={<AddExpense/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='history' element={<ExpenseHistory/>}/>
        <Route path='categorywise' element={<CategoryWiseExpense/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
