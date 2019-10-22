import React, { Fragment } from 'react';
import './App.css';
import Birthday from './components/birthday';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({ [nam]: val });
  }
  render() {
    return (
      <Fragment>
        <nav class="h4 mb-4 text-center">Personal Details</nav>
        <form class="text-center border border-light p-4" action="/">
          <input
            type="text"
            id="firstName"
            name="firstName"
            class="form-control mb-4" placeholder="First Name"
            onChange={this.myChangeHandler}
          />

          <input
            type="text"
            id="lastName"
            name="lastName"
            class="form-control mb-4"
            placeholder="Last Name"
            onChange={this.myChangeHandler}
          />

          <Birthday
            myChangeHandler={this.myChangeHandler}
          />

          <input
            type="number"
            id="age"
            name="age"
            class="form-control mb-4"
            placeholder="Age"
            onChange={this.myChangeHandler}
            maxLength={4}
          />

          <input
            type="text"
            id="hobby"
            name="hobby"
            class="form-control mb-4"
            placeholder="Hobby"
            onChange={this.myChangeHandler}
          />

          <button class="btn btn-info btn-block" type="submit">Submit</button>

        </form>
      </Fragment>
    );
  }
}

export default App;
