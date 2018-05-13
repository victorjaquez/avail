import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Coins extends Component {
  render() {
    const coins = this.props.coins.map(exp => (
      <tr key={exp._id}>
        <td>{exp.name}</td>
        <td>{exp.amount}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-2">Current Holdings</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th />
            </tr>
            {coins}
          </thead>
        </table>
      </div>
    );
  }
}

export default connect(null)(withRouter(Coins));
