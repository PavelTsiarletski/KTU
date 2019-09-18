import { toastr } from 'react-redux-toastr'

export function errorHandler(err, url, payload, options = {}) {
    console.log(
        `${err.status ? err.status : 'Error fetching data'}: ${
        err.statusText
        } - ${url}`,
        err,
        payload
    )
    if (!options.preventToastr) {
        toastr.error(
            `${err.status ? err.status : 'Error fetching data'}`,
            `${err.statusText ? err.statusText : url}`
        )
    }
    if (!options.preventError) {
        throw err
    }
    throw err
}

function handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(res)
    }
    return res.json()
  }

export const getRequest = async (url) => {
    const data = await fetch(url)
        .then(res => {
            return handleResponse(res)
        })
        .catch(err => errorHandler(err, url))
    return data
}