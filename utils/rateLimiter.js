const rateLimiter = require("express-rate-limit");
const MongoStore = require('rate-limit-mongo');

module.exports = (timeframeInMinutes, rateLimit) => rateLimiter({
    store: new MongoStore({
        uri: process.env.MONGO_URI,
        user: process.env.MONGO_USER || "",
        password: process.env.MONGO_USER_PASSWORD || "",
        expireTimeMs: timeframeInMinutes * 60 * 1000,
        errorHandler: (e) => {
            console.error(e);
    
            process.exit(0)
        }
    }),
    windowMs: timeframeInMinutes * 60 * 1000,
    max: rateLimit,
    message: `You made too many requests. Please try again in ${timeframeInMinutes} minutes.`
});
