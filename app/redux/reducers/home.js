import * as homeActionTypes from '../constants/home'

const initialState = {
    loaded: false,
    news: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case homeActionTypes.HOME_FETCH:
            return Object.assign({}, state, { loaded: true });
        case homeActionTypes.HOME_SUCCESS:
            return Object.assign(
                {},
                state,
                { loaded: false },
                { news: state.news.concat(action.result.items) }
            )
        case homeActionTypes.HOME_FETCH:
            return Object.assign({}, state, { loaded: false })
        default:
            return state;
    }
}