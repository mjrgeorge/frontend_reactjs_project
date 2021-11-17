import { combineReducers } from 'redux';
import DemoReducers from './service_student_user/reducers/DemoReducers';

const RootReducer = combineReducers({
    DemoReducers,
});
export default RootReducer;
