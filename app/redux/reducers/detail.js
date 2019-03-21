import * as detailActionTypes from '../constants/detail'

const initialState = {
    loaded: false,
    ssr: false,
    data: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case detailActionTypes.DETAIL_FETCH:
            return Object.assign({}, state, { loaded: true });
        case detailActionTypes.DETAIL_SUCCESS:
            return Object.assign({}, state, { loaded: false }, { data: action.result })
        case detailActionTypes.DETAIL_FETCH:
            return Object.assign({}, state, { loaded: false })
        case detailActionTypes.DETAIL_RESET:
            return Object.assign({}, state, { ssr: false, data: {} })
        default:
            return state;
    }
}