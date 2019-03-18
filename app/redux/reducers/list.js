import * as listActionTypes from '../constants/list'

const initialState = {
    loaded: false,
    data: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case listActionTypes.LIST_FETCH:
            return Object.assign({}, state, { loaded: true });
        case listActionTypes.LIST_SUCCESS:
            return Object.assign({}, state, { loaded: false }, { data: action.result.data })
        case listActionTypes.LIST_FETCH:
            return Object.assign({}, state, { loaded: false })
        default:
            return state;
    }
}