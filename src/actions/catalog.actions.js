//catalog actionTypes
export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED'

export function getData(data) {
  return {
    type: FETCH_DATA,
    data
  }
}
