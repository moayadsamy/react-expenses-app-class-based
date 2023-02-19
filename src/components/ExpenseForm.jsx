import { Component } from "react";

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = { title: "", date: "", price: "", description: "" };
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.checkDate()) {
      this.save();
      this.clear();
    }
  };

  checkDate = () => {
    if (
      this.state.title != "" &&
      this.state.date != "" &&
      this.state.price != "" &&
      this.state.description != ""
    ) {
      return true;
    }
    alert("Enter required data!");
    return false;
  };

  save = () => {
    this.props.onNewExpense(this.getExpense());
  };

  getExpense = () => {
    return {
      id: Date.now(),
      title: this.state.title,
      date: this.state.date,
      price: this.state.price,
      description: this.state.description,
    };
  };

  clear = () => {
    this.setState({ title: "", date: "", price: "", description: "" });
  };

  render() {
    return (
      <form className="col-sm-6 mt-5" onSubmit={this.onSubmitHandler}>
        <div className="row tit">
          <h4 className="">wellcom to Momen Expense Manager </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control addTitle"
              aria-describedby=""
              value={this.state.title}
              onChange={(event) => {
                this.setState({ title: event.target.value });
              }}
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control addDate"
              aria-describedby=""
              value={this.state.date}
              onChange={(event) => {
                this.setState({ date: event.target.value });
              }}
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label">Value</label>
            <input
              type="number"
              className="form-control addValue"
              aria-describedby=""
              value={this.state.price}
              onChange={(event) => {
                this.setState({ price: event.target.value });
              }}
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="title" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control addDescrption"
              aria-describedby=""
              value={this.state.description}
              onChange={(event) => {
                this.setState({ description: event.target.value });
              }}
            />
          </div>
          <div className="mb-3 col-md-12 text-right">
            <button type="submit" className="btn btn-primary addBtn">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
