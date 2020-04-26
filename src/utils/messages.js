const generateMessage = (text, userName) => {
    return {
        userName,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (url, userName) => {
    return {
        userName,
        location: url,
        createdAt: new Date().getTime()
    }
}

module.exports = { generateMessage, generateLocationMessage };