import { useState } from 'react';
import PropTypes from 'prop-types';

function CountdownForm({ handleFormSubmit }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

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
