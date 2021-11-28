export default function mapStateToProps(state) {
  return {
    activeList: state.todolist.activeList,
    completedList: state.todolist.completedList,
    prevRate: state.exchange.prevRate,
    curRate: state.exchange.curRate,
    nextRate: state.exchange.nextRate,
  };
}
