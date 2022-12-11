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
        <InputItem name="name" placeholder="Enter contact`s name"></InputItem>
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
  //   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onAddBtnClick: PropTypes.func.isRequired,
};
