import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a form allowing users to enter a countdown's title and date.
 * @param {Function} handleFormSubmit - Function to call on form submission, passing the title and date up to manage countdown state.
 * @returns {JSX.Element} The countdown form component.
 */
function CountdownForm({ handleFormSubmit }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  /**
   * Handles form submission, preventing default form submission behavior and triggering the countdown initialization.
   * @param {Event} e - The form submission event, used to prevent default submission handling.
   */
  const submitForm = (e) => {
    e.preventDefault();
    handleFormSubmit(title, date);
  };

  return (
    <div className='input-container'>
      <h1>Create Countdown</h1>
      <form className='form' onSubmit={submitForm}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title of countdown'
        />
        <label htmlFor='date-picker'>Select a Date</label>
        <input
          type='date'
          id='date-picker'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

CountdownForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default CountdownForm;
