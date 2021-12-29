import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setDoneTask } from '../actions/actions';

function ActiveList(props) {
  const { activeList, setDoneTask, className } = props;

  function doneValue(event) {
    let value = event.target.parentElement.children[0].innerText;
    setDoneTask(value);
  }

  const actList = activeList.map((value, index) => (
    <li key={index} className="active-task">
      <span className="active-task--item">{value}</span>
      <button
        type="button"
        className="active-task--done-btn"
        onClick={doneValue}
      >
        &#10004; done
      </button>
    </li>
  ));

  return <ul className={className}>{actList}</ul>;
}

const StyledActiveList = styled(ActiveList)`
  list-style-type: none;
  padding: 0;

  .active-task {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 3px;

    &--item {
      width: 100%;
      margin-right: 2px;
      background: linear-gradient(to bottom, skyblue, rgb(115, 115, 253));
      text-align: start;
      padding: 3px;
    }

    &--done-btn {
      width: 77px;
      min-height: 25px;
      border: none;
      padding: 0;
      background: linear-gradient(to bottom, rgb(115, 115, 253), skyblue);
      box-shadow: 2px 2px rgb(182, 182, 252) inset, -2px -2px blue inset;

      &:active {
        box-shadow: 2px 2px blue inset, -2px -2px rgb(182, 182, 252) inset;
      }
    }
  }
`;

let mapStateToProps = (state) => {
  return {
    activeList: state.todolist.activeList,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setDoneTask: (task) => dispatch(setDoneTask(task)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StyledActiveList);
