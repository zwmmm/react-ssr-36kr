import * as homeActionTypes from '../constants/home';
import api from '../../api/music'

export const fetchHome = () => ({
    types: [homeActionTypes.HOME_FETCH, homeActionTypes.HOME_SUCCESS, homeActionTypes.HOME_FAILURE],
    sync: () => api.music()
})