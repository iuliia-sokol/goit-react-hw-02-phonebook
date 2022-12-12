import PropTypes from 'prop-types';
import { FilterWrapper } from './Filter.styled';
import { InputItem } from '../ContactForm/InputItem';
import { Label } from '../ContactForm/ContactForm.styled';

export const Filter = () => {
  return (
    <FilterWrapper>
      <Label>
        Find contacts by name
        <InputItem
          // onChange={this.onInputChange}
          // value={this.state.number}
          type="text"
          name="filter"
          placeholder="Enter contact to search"
        ></InputItem>
      </Label>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  //   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  //   onLeaveFeedback: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};
