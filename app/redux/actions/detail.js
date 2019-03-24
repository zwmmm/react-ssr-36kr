import * as detailActionTypes from '../constants/detail';
import * as api from '../../api/36kr'

export const fetchDetail = id => ({
    types: [
        detailActionTypes.DETAIL_FETCH,
        detailActionTypes.DETAIL_SUCCESS,
        detailActionTypes.DETAIL_FAILURE
    ],
    sync: () => api.detail({ id })
})

export const reset = () => ({ type: detailActionTypes.DETAIL_RESET })