import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
} from '../actions/catalog.actions'


const initialState = {
  isFetching: true,
  data: [],
  total: 0
}

const catalog = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching: true,
        data: {}
      }

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data.ads,
        total: action.data.total
      }

    case FETCH_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        data: [],
        error: action.error
      }

    default:
      return state
  }
}

export default catalog
