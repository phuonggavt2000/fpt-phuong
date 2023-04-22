import actionTypes from "../actions/actionTypes";

const initState = {};

const appReducers = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_PRODUCT:
            break;

        default:
            return state;
    }
};

export default appReducers;
