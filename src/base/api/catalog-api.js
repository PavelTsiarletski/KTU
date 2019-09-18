import { getRequest } from './api-request'

class List {
    getData() {
        let url = 'https://cre-api.kufar.by/ads-search/v1/engine/v1/search/rendered-paginated?size=42&sort=lst.d&cur=BYR&cat=5070&rgn=7&lang=ru'
        return getRequest(url)
      }
}

export default new List()