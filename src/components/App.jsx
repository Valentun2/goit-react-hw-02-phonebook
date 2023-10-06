import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  
  createContact = data => {
    const isUser = this.state.contacts.find(({ name }) => name === data.name);
    if (isUser) {
      alert(`${data.name} is alredy in contacts`);
      return;
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };

    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  contactFilter = nameUser => this.setState({ filter: nameUser });

  filterArr = () =>
    this.state.contacts.filter(({ name }) =>
      name
        .toLocaleLowerCase()
        .trim()
        .includes(this.state.filter.toLocaleLowerCase().trim())
    );

  deleteContact = userName => {
    this.state.contacts.forEach((obj, i) => {
      if (userName !== obj.name) {
        return;
      }

      this.state.contacts.splice(i, 1);
      this.setState({ contacts: this.state.contacts });
    });
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <h1 style={{ marginBottom: 10 }}>Phonebook</h1>
        <ContactForm createContact={this.createContact} />

        <h2 style={{ marginBottom: 10 }}>Contacts</h2>
        <Filter contactFilter={this.contactFilter} />
        <ContactList arr={this.filterArr} deleteContact={this.deleteContact} />
      </div>
    );
  }
}
