import PropTypes from 'prop-types';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { Form, Label } from './ContactForm.styled';
import { Btn } from '../Btn/Btn';
import { InputItem } from './InputItem';

export const ContactForm = ({ onAddBtnClick }) => {
  return (
    <Form>
      <Label>
        Name
        <InputItem
          name="name"
          placeholder="Enter contact`s name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        ></InputItem>
      </Label>
      <Label>
        Number
        <InputItem
          type="tel"
          name="number"
          placeholder="Enter contact`s number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        ></InputItem>
      </Label>
      <Btn
        type="submit"
        icon={MdPersonAddAlt1}
        status="add"
        text="Add contact"
        onClick={onAddBtnClick}
      ></Btn>
    </Form>
  );
};

ContactForm.propTypes = {
  onAddBtnClick: PropTypes.func.isRequired,
};
