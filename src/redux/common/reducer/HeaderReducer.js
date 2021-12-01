/* eslint-disable no-unreachable */
/* eslint-disable default-param-last */
import * as HeaderConstant from '../constant/HeaderConstant';

const initialState = {
    userLocalInformation: {
        city: '',
        country: '',
        countryCode: '',
        query: '',
    },
};

const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        // USER LOCAL INFORMATION SWITCH START
        case HeaderConstant.GET_USER_LOCAL_INFO:
            return {
                ...state,
                userLocalInformation: action.payload,
            };
            break;
        // USER LOCAL INFORMATION SWITCH END

        default:
            break;
    }
    return state;
};
export default HeaderReducer;
