export const appKey = "kid_rJU5EUTnH";
export const appSecret = "e3d900c576494251966fdf9240f8f7d7";

function saveData(key, value) {
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