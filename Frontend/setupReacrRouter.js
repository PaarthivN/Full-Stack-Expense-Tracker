import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import PieChart from './components/PieChart';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/expenses/new" component={ExpenseForm} />
                    <Route path="/expenses" component={ExpenseList} />
                    <Route path="/chart" component={PieChart} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
