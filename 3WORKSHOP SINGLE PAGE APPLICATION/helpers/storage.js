export const appKey = "kid_HJDQB6vpr";
export const appSecret = "1997b4c10a654a40932a84239fa66918";

export function saveData(key, value) {
    localStorage.setItem(key + appKey, JSON.stringify(value));
}

export function getData(key) {
    return localStorage.getItem(key + appKey);
}

export function saveUser(data) {
    saveData("userInfo", data);
    saveData("authToken", data._kmd.authtoken);
}

export function removeUser() {
    localStorage.clear();
}