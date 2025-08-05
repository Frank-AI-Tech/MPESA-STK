

const config = {
    consumerKey: process.env.CONSUMER_KEY || "TEyb2o1QieawGAwxyQQkz57qfBJ7wiLOEuN72UDhPfC0JEkg",
    consumerSecret: process.env.CONSUMER_SECRET || "PDmvKcPIm83M3f0swhNgXU0lWhek9EAlWhPbNH9sMFATkwTu6ktZiXwfUATL9xA3",
    shortCode: process.env.SHORTCODE || "174379",
    passkey: process.env.PASSKEY || "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
    number: process.env.PUSHNUMBER || "254708374149",
    amount: process.env.AMOUNT || "1",
    callbackUrl: process.env.CALLBACK_URL || ""
};

module.exports = config;
