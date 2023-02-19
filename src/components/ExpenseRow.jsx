import { Component } from "react";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ExpenseRow extends Component {
    onDeleteHandler = () => {
        this.props.onDeleteExpense(this.props.expense.id);
    };
    render() {
        return (
            <tr>
            <td> {this.props.expense.title} </td>
            <td> {this.props.expense.date}</td>
            <td>{this.props.expense.price}$ </td>
            <td colSpan="2">{this.props.expense.description} </td>
            <td className="text-right">
                <a href="#" className="delete" onClick={this.onDeleteHandler}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </a>
                </td>
          </tr>

        );
    }
}

export default ExpenseRow;