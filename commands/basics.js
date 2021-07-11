module.exports = {
    ping: async ({ message }) => {
        message.channel.send("pong");
        return;
    },
    hello: async ({ message }) => {
        const sum = 1 + 5;
        message.channel.send("hi, how are you?")
    }
};