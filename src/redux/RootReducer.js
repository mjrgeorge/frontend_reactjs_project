import { combineReducers } from 'redux';
import HeaderReducer from './common/reducer/HeaderReducer';
import DashboardReducer from './service_student_user/reducer/DashboardReducer';

const RootReducer = combineReducers({
    HeaderReducer,
    DashboardReducer,
});
export default RootReducer;
