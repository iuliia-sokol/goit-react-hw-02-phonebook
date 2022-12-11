import React from 'react';

import { Container, MainHeader, SubHeader } from './App.styled';
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
        <MainHeader>Phonebook</MainHeader>
        <ContactForm onAddBtnClick={this.onAddBtnClick} />
        <SubHeader>Contacts</SubHeader>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}
