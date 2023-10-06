import { Component } from 'react';
import styles from './Filter.module.css';

export class Filter extends Component {
  onChange = evt => {
    this.props.contactFilter(evt.target.value);
  };

  render() {
    return (
      <label className={styles.labelFilter}>
        Find contact by name
        <input
          className={styles.inputFilter}
          type="text"
          name="filter"
          onChange={this.onChange}
          pattern="^[a-zA-Z]+$"
        />
      </label>
    );
  }
}
