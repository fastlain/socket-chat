export function getLocalUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function saveLocalUser(user) {
    localStorage.setItem('user',  JSON.stringify(user));
}

export function getLocalMessages() {
    if (validateTimestamp()) {
        return JSON.parse(localStorage.getItem('messages'));
    } else {
        localStorage.removeItem('messages')
    }
}

export function setLocalMessages(messages) {
    updateTimestamp();
    localStorage.setItem('messages', JSON.stringify(messages));
}

function updateTimestamp() {
    localStorage.setItem('timestamp', JSON.stringify(new Date()))
}

// returns true if timestamp is less than one hour old
function validateTimestamp() {
    const timestamp = new Date(JSON.parse(localStorage.getItem('timestamp')));
    const hourAgo = new Date();
    hourAgo.setHours(hourAgo.getHours() - 1)
    return timestamp > hourAgo;
}