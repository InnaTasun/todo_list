import React from 'react';
import ActiveList from './ActiveList';
import { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTask } from '../actions/actions';

function ToDoList(props) {
  const { addTask, className } = props;
  const [currentTask, setCurrentTask] = useState('');

  function addValue() {
    if (currentTask && currentTask.trim()) {
      addTask(currentTask.trim());
      setCurrentTask('');
    }
  }

  function onChange(event) {
    setCurrentTask(event.target.value);
  }

  function onClick(event) {
    addValue();
    event.target.parentElement.children[0].focus();
  }

  function onSubmit(event) {
    event.preventDefault();
    addValue();
    event.target.children[0].focus();
  }

  return (
    <div className={`${className} new-task`}>
      <form className="new-task" onSubmit={onSubmit}>
        <input
          className="new-task--input"
          type="text"
          placeholder="Enter  new  task..."
          value={currentTask}
          onChange={onChange}
        />
        <button className="new-task--btn" type="button" onClick={onClick}>
          +
        </button>
      </form>
      <div>
        <ActiveList />
      </div>
    </div>
  );
}

const StyledToDoList = styled(ToDoList)`
  .new-task {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    &--input {
      width: 100%;
      min-height: 30px;
      margin-right: 2px;
      padding: 5px;
      border: solid 2px black;
    }

    &--btn {
      height: 30px;
      font-weight: bold;
      width: 30px;
      border: none;
      background-color: rgb(115, 115, 253);
      box-shadow: 2px 2px rgb(182, 182, 252) inset, -2px -2px blue inset;
      color: white;
      font-size: 1em;

      &:active {
        box-shadow: 2px 2px blue inset, -2px -2px rgb(182, 182, 252) inset;
      }
    }
  }
`;

let mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(StyledToDoList);
