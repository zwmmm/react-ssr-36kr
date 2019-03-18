import * as listActionTypes from '../constants/list';
import * as api from '../../api/36kr'

export const fetchList = () => ({
    types: [listActionTypes.LIST_FETCH, listActionTypes.LIST_SUCCESS, listActionTypes.LIST_FAILURE],
    sync: () => api.list()
})