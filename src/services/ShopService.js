import { HttpService } from './HttpService'

class ShopsService extends HttpService {
    getAll(term='') {
        return this.axios.get('/shops', {params:{term}})
    }

    get(id) {
        return this.axios.get(`/shops/${id}`)
    }

    add(shop) {
        return this.axios.post('/shops', shop)
    }

    setManager(manager_id, id) {
        return this.axios.patch(`/shops/${id}`, manager_id)
    }
}

export const shopsService = new ShopsService()