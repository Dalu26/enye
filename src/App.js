import React from 'react';
import './App.css';
import Birthday from './components/birthday';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      birthday: '',
      age: '',
      hobby: '',
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    if (val.length > 0) {
      this.setState({ [nam]: val });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const {
      firstName,
      lastName,
      birthday,
      age,
      hobby,
    } = this.state;

    return (
      <section className="appWrapper">
        <nav class="h4 mb-4 text-center" className="appHeader">
          Personal Details
        </nav>
        <form class="text-center border border-light p-4">
          <input
            type="text"
            id="firstName"
            name="firstName"
            class="form-control mb-4" placeholder="First Name"
            onChange={this.myChangeHandler}
            required
          />

          <input
            type="text"
            id="lastName"
            name="lastName"
            class="form-control mb-4"
            placeholder="Last Name"
            onChange={this.myChangeHandler}
            required
          />

          <Birthday
            myChangeHandler={this.myChangeHandler}
            required
            type="date"
            id="birthday"
            name="birthday"
            class="form-control mb-4"
            placeholder="Birthday"
          />

          <input
            type="number"
            id="age"
            name="age"
            class="form-control mb-4"
            placeholder="Age"
            onChange={this.myChangeHandler}
            maxLength={4}
            required
          />

          <input
            type="text"
            id="hobby"
            name="hobby"
            class="form-control mb-4"
            placeholder="Hobby"
            onChange={this.myChangeHandler}
            required
          />

          <button class="btn btn-info btn-block" type="submit" onClick={event => this.handleSubmit(event)}>Submit</button>
        </form>

        <div class="container">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Birthday</th>
                <th>Age</th>
                <th>Hobby</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{birthday}</td>
                <td>{age}</td>
                <td>{hobby}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default App;
