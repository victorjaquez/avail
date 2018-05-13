import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCoins } from "../../actions/profileActions";

class AddCoins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(event) {
    event.preventDefault();

    const expData = {
      name: this.state.name,
      amount: this.state.amount
    };

    this.props.addCoins(expData, this.props.history); // Redirect and have access within action thanks to React router dom
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="add-coins">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-3 text-center">Add Coins</h1>
              <p className="lead text-center">Add a coin and the amount</p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="* Amount"
                  name="amount"
                  value={this.state.amount}
                  onChange={this.onChange}
                  error={errors.amount}
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Hook properties to Redux
AddCoins.propTypes = {
  addCoins: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addCoins })(withRouter(AddCoins));
