import { WebClient } from "./WebClient";

class apiService {
    async post(url, payload, config) {
        const { data } = await WebClient.post(url, payload, config);
        return data;
    }
    async get(url, config) {
        const { data } = await WebClient.get(url, config);
        return data;
    }
    async put(url, payload) {
        const { data } = await WebClient.put(url, payload);
        return data;
    }
    async delete(url, payload) {
        const { data } = await WebClient.delete(url, payload);
        return data;
    }
    async request(url, method, payload) {
        const { data } = await WebClient.request(url, method, payload);
        return data;
    }
}

export default new apiService();
