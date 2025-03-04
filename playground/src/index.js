import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../../src/DatePicker.css';
import { Calendar } from '../../src';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const [selectedDay, setSelectedValue] = useState({
    year: 2019,
    month: 10,
    day: 5,
  });
  return (
    <div>
      <Calendar value={selectedDay} onChange={setSelectedValue} shouldHighlightWeekends />
      <br />
      <button
        type="button"
        onClick={() => {
          setSelectedValue({
            year: 2020,
            month: 1,
            day: 1,
          });
        }}
      >
        Set Date
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
