import React from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

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

  onAddBtnClick = FormData => {
    const { name, number } = FormData;

    const includesName = this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (includesName) {
      return Notiflix.Notify.warning(`${name} is already in contacts`);
    } else {
      let contact = { id: nanoid(), name: name, number: number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
      Notiflix.Notify.success(
        `${name} was successfully added to your contacts`
      );
    }
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
        <ContactForm onAddBtnClick={this.onAddBtnClick} />
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
