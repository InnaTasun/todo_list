import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteTask, activateTask } from '../actions/actions';

function CompletedList(props) {
  const { list, className } = props;

  const dispatch = useDispatch();

  function onActivateTask(event) {
    let value = event.target.parentElement.children[0].innerText;
    dispatch(activateTask(value));
  }

  function onDeleteTask(event) {
    let value = event.target.parentElement.children[0].innerText;
    dispatch(deleteTask(value));
  }

  const complList = list.map((value, index) => (
    <li key={index} className="completed-task">
      <span className="completed-task--item">{value}</span>
      <button
        type="button"
        className="completed-task--compl-btn"
        onClick={onActivateTask}
      >
        &#8593; activate
      </button>
      <button
        type="button"
        className="completed-task--compl-btn"
        onClick={onDeleteTask}
      >
        x delete
      </button>
    </li>
  ));

  return <ul className={className}>{complList}</ul>;
}

const StyledCompletedList = styled(CompletedList)`
  list-style-type: none;
  padding: 0;
  margin-bottom: 100px;

  .completed-task {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 3px;

    &--item {
      width: 100%;
      background: linear-gradient(to bottom, #ccccd3, #e8e8ec);
      color: darkslategrey;
      text-align: start;
      padding: 3px;
    }

    &--compl-btn {
      width: 77px;
      min-height: 25px;
      margin-left: 2px;
      border: none;
      padding: 0;
      background: linear-gradient(to bottom, #e8e8ec, #ccccd3);
      box-shadow: 2px 2px rgb(190, 190, 190) inset, -2px -2px grey inset;

      &:active {
        box-shadow: 2px 2px grey inset, -2px -2px rgb(190, 190, 190) inset;
      }
    }
  }
`;

export default StyledCompletedList;
