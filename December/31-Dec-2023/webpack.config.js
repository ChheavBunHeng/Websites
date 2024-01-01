const path = require("path");
module.exports = {
    entry: ["./src/script.js","./src/reservations.js"],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    watch: true,
};