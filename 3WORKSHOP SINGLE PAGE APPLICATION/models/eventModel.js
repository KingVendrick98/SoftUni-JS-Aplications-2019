import {
    appKey
} from "../helpers/storage.js";
import {
    post,
    get
} from "../helpers/requester.js";

export function create(data) {
    return post(`appdata/${appKey}/events`, data);
}

export async function getAllEvents() {
    return await get(`appdata/${appKey}/events`, data)
}

export async function getEvent(id) {
    return await get(`appdata/${appKey}/events/${id}`)
}