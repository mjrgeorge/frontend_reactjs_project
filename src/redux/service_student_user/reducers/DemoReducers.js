/* eslint-disable no-unreachable */
/* eslint-disable default-param-last */
import * as DemoConstants from '../constants/DemoConstants';

const initialState = {
    demoData: [],
    userLocalInformation: {
        city: '',
        country: '',
        countryCode: '',
        query: '',
    },
};

const DemoReducers = (state = initialState, action) => {
    switch (action.type) {
        case DemoConstants.GET_DEMO_DATA:
            return {
                ...state,
                demoData: action.payload,
            };
            break;

        case DemoConstants.GET_USER_LOCAL_INFO:
            return {
                ...state,
                userLocalInformation: action.payload,
            };
            break;

        default:
            break;
    }
    return state;
};
export default DemoReducers;
