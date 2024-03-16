import { apiEndpoint } from "../../shared/constants"

export const fetchProducts = async () => {
    return fetch(apiEndpoint).then(res => res.json())
}