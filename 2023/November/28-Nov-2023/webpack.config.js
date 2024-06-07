const path = require("path");

module.exports = {
    entry: {
        bundle:['./script.js',"./src/js/fetchAndLoader.js"],
    },
    output:{
        filename: "bundles.js",
        path: path.resolve(__dirname, "dist")
    },
    watch: true,
    mode: "development"
}