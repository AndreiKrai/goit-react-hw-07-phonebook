import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/Slice/PhoneBookSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => dispatch(setFilter(e.target.value));
  const filter = useSelector(state => state.contacts.filter);

  return (
    <form action="">
      {/* Name input */}
      <div className="mb-3">
        <label htmlFor="filter" className="form-label">
          Find contacts by name
        </label>
        <input
          onChange={handleChange}
          value={filter}
          type="text"
          className="form-control"
          name="filter"
          id="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" className="form-text">
          Name may contain only letters, apostrophe, dash and spaces. For
          example Adrian, Jacob Mercer, Charles de Batz de Castelmore
          d'Artagnan.
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value='isOpenToWork'            

          />
          {/* -------------Radiobuttons */}
          <label class="form-check-label" for="flexRadioDefault1">
            OpenToWork
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value='NotisOpenToWork'
            checked

          />
          <label class="form-check-label" for="flexRadioDefault2">
            NotOpenToWork
          </label>
        </div>
      </div>
    </form>
  );
};

Filter.propTypes = {
  onInput: PropTypes.func.isRequired,
  filter: PropTypes.string,
};