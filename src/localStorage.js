export function getLocalUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function saveLocalUser(user) {
    localStorage.setItem('user',  JSON.stringify(user));
}

export function getLocalMessages() {
    return JSON.parse(localStorage.getItem('messages'));
}

export function setLocalMessages(messages) {
    localStorage.setItem('messages', JSON.stringify(messages));
}
