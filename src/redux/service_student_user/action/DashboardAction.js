/* eslint-disable import/prefer-default-export */
import * as DashboardConstant from '../constant/DashboardConstant';

// STUDENT USER DASHBOARD DRAWER OPEN ACTION START
export const drawerOpenAction = (data) => (dispatch) => {
    dispatch({
        type: DashboardConstant.DASHBOARD_DRAWER_OPEN,
        payload: data,
    });
};
// STUDENT USER DASHBOARD DRAWER OPEN ACTION END

// STUDENT USER DASHBOARD MOBILE DRAWER OPEN ACTION START
export const mobileDrawerOpenAction = (data) => (dispatch) => {
    dispatch({
        type: DashboardConstant.DASHBOARD_MOBILE_DRAWER_OPEN,
        payload: data,
    });
};
// STUDENT USER DASHBOARD MOBILE DRAWER OPEN ACTION END

// STUDENT USER DASHBOARD MOBILE DRAWER OPEN ACTION START
export const adsDrawerOpenAction = (data) => (dispatch) => {
    dispatch({
        type: DashboardConstant.DASHBOARD_ADS_DRAWER_OPEN,
        payload: data,
    });
};
// STUDENT USER DASHBOARD MOBILE DRAWER OPEN ACTION END

// STUDENT USER DASHBOARD DRAWER CLOSE ACTION START
export const drawerCloseAction = (data) => (dispatch) => {
    dispatch({
        type: DashboardConstant.DASHBOARD_DRAWER_CLOSE,
        payload: data,
    });
};
// STUDENT USER DASHBOARD DRAWER CLOSE ACTION END
