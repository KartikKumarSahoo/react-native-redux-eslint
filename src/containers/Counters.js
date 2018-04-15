import { connect } from 'react-redux';

import Counters from '../components/Counters';
import * as actionCreators from '../redux/modules/counters';

const createActionDispatchers = _actionCreators => dispatch =>
  Object.keys(_actionCreators).reduce((actionDispatchers, name) => {
    const actionCreator = _actionCreators[name];
    if (typeof actionCreator === 'function') {
      actionDispatchers[name] = (...args) => dispatch(actionCreator(...args)); // eslint-disable-line no-param-reassign
    }
    return actionDispatchers;
  }, {});

const mapStateToProps = state => ({
  countersState: state.counters, // gives our component access to state through props.countersState
});
const mapDispatchToProps = createActionDispatchers(actionCreators);

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
