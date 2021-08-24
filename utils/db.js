var mongoose = require("mongoose");

// Successfully connection
mongoose.connection.on("connected", () => {
    console.log("Mongoose connection successful");
});

// Connection throws error
mongoose.connection.on("error", (err) => {
    console.log(`Mongoose connection error: ${err}`);
    process.exit(1)
});

// Connection is disconnected
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose connection disconnected");
    process.exit(1)
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("Mongoose connection disconnected through app termination");
        process.exit(0);
    });
});

module.exports = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    user: process.env.MONGO_USER || "",
    pass: process.env.MONGO_USER_PASS || ""
});
