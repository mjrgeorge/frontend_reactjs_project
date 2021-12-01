/* eslint-disable no-unreachable */
/* eslint-disable default-param-last */
import * as DashboardConstant from '../constant/DashboardConstant';

const initialState = {
    drawerOpen: true,
    mobileDrawerOpen: false,
    adsDrawerOpen: true,
};

const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        // STUDENT USER DASHBOARD DRAWER OPEN SWITCH START
        case DashboardConstant.DASHBOARD_DRAWER_OPEN:
            return {
                ...state,
                drawerOpen: action.payload,
            };
            break;
        // STUDENT USER DASHBOARD DRAWER OPEN SWITCH END

        // STUDENT USER DASHBOARD MOBILE DRAWER OPEN SWITCH START
        case DashboardConstant.DASHBOARD_MOBILE_DRAWER_OPEN:
            return {
                ...state,
                mobileDrawerOpen: action.payload,
            };
            break;
        // STUDENT USER DASHBOARD MOBILE DRAWER OPEN SWITCH END

        // STUDENT USER DASHBOARD ADS DRAWER OPEN SWITCH START
        case DashboardConstant.DASHBOARD_ADS_DRAWER_OPEN:
            return {
                ...state,
                adsDrawerOpen: action.payload,
            };
            break;
        // STUDENT USER DASHBOARD ADS DRAWER OPEN SWITCH END

        // STUDENT USER DASHBOARD DRAWER CLOSE SWITCH START
        case DashboardConstant.DASHBOARD_DRAWER_CLOSE:
            return {
                ...state,
                drawerOpen: action.payload,
                mobileDrawerOpen: action.payload,
            };
            break;
        // STUDENT USER DASHBOARD DRAWER CLOSE SWITCH END

        default:
            break;
    }
    return state;
};
export default DashboardReducer;
