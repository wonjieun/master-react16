import React, { Component, Fragment } from "react";

class ReturnTypes extends Component {
  render() {
    return (
      <Fragment>
        <header>header</header>
        <div />
        <footer />
      </Fragment>
    );
    // string 타입으로 리턴 가능
    // return "hello";
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
      </Fragment>
    );
  }
}

export default App;
