import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../resources/css/custom.css';
import MainImage from "../resources/img/m1.png";
import ExpensesTable from '../components/ExpensesTable';
import ExpenseForm from '../components/ExpenseForm';


class App extends Component {
  constructor() {
    super();
    this.state = { expenses: [] };
  }
  onNewExpenseHandler = (expense) => {
    this.setState((prevState) => {
      return {expenses: [expense, ...prevState.expenses]}
    });
  };

  onDeleteExpenseHandler = (id) => {
    let data = this.state.expenses.filter((element) => element.id != id);
    this.setState({ expenses: data });
  }
    render() {
        return   <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <img src={MainImage} className="img-fluid" alt="" />
          </div>
          <ExpenseForm onNewExpense={this.onNewExpenseHandler} />
        </div>
        <ExpensesTable expenses={this.state.expenses} onDeleteExpense={this.onDeleteExpenseHandler}
        />
      </div>
    }
}
export default App;