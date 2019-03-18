import * as homeActionTypes from '../constants/home';
import * as api from '../../api/36kr'

export const fetchHome = (id) => ({
    types: [homeActionTypes.HOME_FETCH, homeActionTypes.HOME_SUCCESS, homeActionTypes.HOME_FAILURE],
    sync: () => api.news(id ? { id } : {})
})