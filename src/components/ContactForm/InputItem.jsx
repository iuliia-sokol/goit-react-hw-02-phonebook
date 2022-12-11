import PropTypes from 'prop-types';
import { Input } from './InputItem.styled';

export const InputItem = ({
  type = 'text',
  name,
  placeholder,
  pattern,
  title,
}) => {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      required
    />
  );
};

InputItem.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};
