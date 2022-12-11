import PropTypes from 'prop-types';
import { BtnElement } from './Btn.styled';

export const Btn = ({
  text,
  status,
  disabled = false,
  icon: Icon = null,

  onClick,
}) => {
  return (
    <BtnElement
      status={status}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon></Icon>}
      {text}
    </BtnElement>
  );
};

Btn.propTypes = {
  icon: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  status: PropTypes.string,
};
