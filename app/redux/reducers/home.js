import * as homeActionTypes from '../constants/home'

const initialState = {
    loaded: false,
    columnLoaded: false,
    news: [],
    column: [],
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
        case homeActionTypes.COLUMN_FETCH:
            return Object.assign({}, state, { columnLoaded: true });
        case homeActionTypes.COLUMN_SUCCESS:
            return Object.assign(
                {},
                state,
                { columnLoaded: false },
                { column: state.column.concat(action.result.items) }
            )
        case homeActionTypes.COLUMN_FAILURE:
            return Object.assign({}, state, { columnLoaded: false })
        default:
            return state;
    }
}