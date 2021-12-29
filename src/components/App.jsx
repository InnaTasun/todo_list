import React from 'react';
import ToDoList from './ToDoList';
import Report from './Report';
import ExchangeRates from './ExchangeRates';
import styled from 'styled-components';

function App(props) {
  const { className } = props;

  return (
    <div className={`${className} content`}>
      <header className="content--header">
        <h2>TODO LIST</h2>
      </header>

      <ToDoList className="content--main" />

      <Report className="content--report" />

      <footer className="content--footer">
        <span>Created by Inna Tasun &copy; 2021</span>
        <ExchangeRates />
      </footer>
    </div>
  );
}

const StyledApp = styled(App)`
  position: relative;
  max-width: 1000px;
  min-height: calc(100vh - 50px);
  text-align: center;
  margin: 0 auto;

  * {
    box-sizing: border-box;
  }

  .content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: stretch;

    &--header {
      margin-top: 30px;
    }

    &--main {
      display: flex;
      flex-flow: column nowrap;
      justify-content: start;
      align-items: stretch;
    }

    &--report {
      display: flex;
      flex-flow: column nowrap;
      justify-content: start;
      align-items: stretch;
    }

    &--footer {
      position: absolute;
      bottom: 10px;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      color: rgb(115, 115, 253);
      font-style: italic;
    }
  }
`;

export default StyledApp;
