import PropTypes from 'prop-types';
import { Input } from './InputItem.styled';

export const InputItem = ({ name, placeholder }) => {
  return (
    <Input
      placeholder={placeholder}
      type="text"
      name={name}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  );
};

InputItem.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
