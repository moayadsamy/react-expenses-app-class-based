import { Component } from "react";
import ExpenseRow from "./ExpenseRow";

class ExpensesTable extends Component {
    render() {
        return (        <div className="row mt-5 mb-5">
        <div className="custom-card ">
          <table className="table ">
            <thead>
              <tr>
                <th> Title</th>
                <th> Date</th>
                <th>value</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {this.props.expenses.map((element) => (
                  <ExpenseRow key={element.id} expense={element }
                  onDeleteExpense={this.props.onDeleteExpense}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    }
}

export default ExpensesTable;