import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

import { FilterWrapper } from './Filter.styled';
import css from './Filter.module.css';

import { Label } from '../ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      <Label>
        Find contacts by name
        <DebounceInput
          className={css.debounceInput}
          type="text"
          name="filter"
          placeholder="Enter contact to search"
          value={value}
          onChange={onChange}
          debounceTimeout={500}
        ></DebounceInput>
      </Label>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
