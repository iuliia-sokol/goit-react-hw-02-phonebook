import React from 'react';
import { nanoid } from 'nanoid';

import { Container, MainHeader, SubHeader } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onAddBtnClick = event => {
    event.preventDefault();
    console.log('hello');

    let contact = { id: '', name: '', number: '' };

    contact.id = nanoid();
    contact.name = this.state.name;
    contact.number = this.state.number;

    console.log(contact);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onDeleteBtnClick = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <MainHeader>Phonebook</MainHeader>
        <ContactForm
          onAddBtnClick={this.onAddBtnClick}
          onInputChange={this.onInputChange}
        />
        <SubHeader>Contacts</SubHeader>
        <Filter />
        <ContactList
          contacts={this.state.contacts}
          onDeleteBtnClick={this.onDeleteBtnClick}
        />
      </Container>
    );
  }
}
