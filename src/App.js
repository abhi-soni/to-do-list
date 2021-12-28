import React, { useState } from 'react';

import TaskList from './components/Tasks/TaskList/TaskList';
import TaskInput from './components/Tasks/TaskInput/TaskInput';
import './App.css';

const App = () => {
  const [Tasks, setTasks] = useState([
    { text: 'Do all exercises!', id: 't1' },
    { text: 'Finish the course!', id: 't2' }
  ]);

  const addTaskHandler = enteredText => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  const deleteItemHandler = taskId => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskId);
      return updatedTasks;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No Tasks found. Maybe add one?</p>
  );

  if (Tasks.length > 0) {
    content = (
      <TaskList items={Tasks} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="task-form">
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section id="tasks">
        {content}
        {/* {Tasks.length > 0 && (
          <TaskList
            items={Tasks}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No tasks found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
