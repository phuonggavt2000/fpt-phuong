import actionTypes from "./actionTypes";

export const changeTheme = (theme) => (dispatch) => {
    dispatch({
        type: actionTypes.REGISTER_PRODUCT,
        theme: theme,
    });
};
