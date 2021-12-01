/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as HeaderConstant from '../constant/HeaderConstant';

// USER LOCAL INFORMATION ACTION START
export const getUserLocalInfo = () => (dispatch) => {
    axios
        .get(`${HeaderConstant.userLocalInfoAPI}`)
        .then((response) => {
            const userLocalData = response.data;
            dispatch({
                type: HeaderConstant.GET_USER_LOCAL_INFO,
                payload: userLocalData,
            });
        })
        .catch((error) => {
            console.log(error.message);
        });
};
// USER LOCAL INFORMATION ACTION END
