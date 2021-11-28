import * as actions from './actions/actions';

export default function mapDispatchToProps(dispatch) {
  return {
    add: (task) => dispatch(actions.add(task)),
    done: (task) => dispatch(actions.done(task)),
    del: (task) => dispatch(actions.del(task)),
    activ: (task) => dispatch(actions.activ(task)),
    prev: () => dispatch(actions.prev()),
    next: () => dispatch(actions.next()),
    getRates: () => dispatch(actions.getRates()),
  };
}
