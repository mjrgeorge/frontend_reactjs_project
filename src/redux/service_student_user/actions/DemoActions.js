/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as DemoConstants from '../constants/DemoConstants';

export const demoAllData = () => (dispatch) => {
    axios
        .get(`${DemoConstants.getDemoApi}`)
        .then((response) => {
            const { data } = response;
            dispatch({
                type: DemoConstants.GET_DEMO_DATA,
                payload: data,
            });
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export const getUserLocalInfo = () => (dispatch) => {
    axios
        .get(`${DemoConstants.userLocalInfoAPI}`)
        .then((response) => {
            const userLocalData = response.data;
            dispatch({
                type: DemoConstants.GET_USER_LOCAL_INFO,
                payload: userLocalData,
            });
        })
        .catch((error) => {
            console.log(error.message);
        });
};
