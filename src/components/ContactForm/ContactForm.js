import { Component } from 'react';
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = evt => {
    console.log(evt.target.name);
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.props.createContact({
      name: this.state.name,
      number: this.state.number,
    });
    console.log(this.state);
    evt.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            onChange={this.onChange}
            pattern="^[a-zA-Z]+$"
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            required
            onChange={this.onChange}
            pattern="^[ 0-9]+$"
          />
        </label>
        <button className={styles.formButton}>add contact</button>
      </form>
    );
  }
}
