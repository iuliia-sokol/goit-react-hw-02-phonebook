import React from 'react';

import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onAddBtnClick = event => {
    event.preventDefault();
    console.log('hello');
    console.log(ContactForm.children);

    let contact = {
      id: '',
      name: '',
    };
    console.log(contact);
    // this.setState(prevState => ({
    //   bad: prevState.bad + 1,
    // }));
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAddBtnClick={this.onAddBtnClick} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}
