const BASE_URL = "https://ramen-api.dev/shops";

export async function getRamen(page = 1, perPage = 40) {
    const response = await fetch(`${BASE_URL}?pretty&page=${page}&perPage=${perPage}`);
    const data = await response.json();
    return data.shops;
}