import React from 'react';
import CompletedList from './CompletedList';
import { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

function Report(props) {
  const { activeList, completedList, className } = props;
  const [showList, setShowList] = useState(false);
  const [btnText, setBtnText] = useState('Show completed');

  function showHideCompletedList() {
    setShowList(!showList);
    if (!showList) {
      setBtnText('Hide completed');
    } else {
      setBtnText('Show completed');
    }
  }

  return (
    <div className={className}>
      <h3>REPORT</h3>
      <div className="report">
        <div className="report--info">
          Active tasks: {activeList.length} <br />
          Completed tasks: {completedList.length} <br />
        </div>
        <button
          type="button"
          className="report--show-btn"
          onClick={showHideCompletedList}
        >
          {btnText}
        </button>
      </div>
      <div>{showList ? <CompletedList list={completedList} /> : ''}</div>
    </div>
  );
}

const StyledReport = styled(Report)`
  text-align: left;
  margin-top: 20px;

  .report {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;

    &--info {
      font-size: 1.1em;
    }

    &--show-btn {
      width: 132px;
      height: 30px;
      font-weight: bold;
      background-color: lightgrey;
      border: none;
      box-shadow: 2px 2px rgb(190, 190, 190) inset, -2px -2px grey inset;

      &:active {
        box-shadow: 2px 2px grey inset, -2px -2px rgb(190, 190, 190) inset;
      }
    }
  }
`;

let mapStateToProps = (state) => {
  return {
    activeList: state.todolist.activeList,
    completedList: state.todolist.completedList,
  };
};

export default connect(mapStateToProps)(StyledReport);
