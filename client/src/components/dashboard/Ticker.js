import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD"
      )
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      });
  }

  render() {
    return (
      <div className="Ticker">
        {Object.keys(this.state.cryptos).map(key => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right">{this.state.cryptos[key].USD}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(null)(withRouter(Ticker));
