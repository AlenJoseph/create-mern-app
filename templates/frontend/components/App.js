module.exports = `import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from './Header';

const Landing = () => (<div>Landing</div>);
const Footer = () => (<div>Footer</div>);


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <section>
        <Header />
        <Route exact path="/" component={Landing} />
        <Footer />
      </section>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);`