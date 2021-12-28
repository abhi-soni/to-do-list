import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './TaskInput.css';

const TaskInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);           // get state of input field whether it's empty or not

  const taskInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {         //  reset conditional css 
      setIsValid(true);                                 // set isValid to true if length is > 1
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTask(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Dynamic CSS */}
      <div className={`form-control ${isValid ? '' : 'invalid'}`}>   {/* `` operator will add string to current string */}
        <label>To Do Tasks</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </div>


      {/* Inline Dynamic CSS
                  <div className="form-control">
                    <label style={{ color: isValid ? 'black' : 'red' }}>To-Do Task</label>
                    <input
                      style={{ borderColor: isValid ? '#ccc' : 'red', background: isValid ? 'transparent' : 'salmon' }}
                      type="text" onChange={taskInputChangeHandler} />
                  </div> 
       */}

      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskInput;
