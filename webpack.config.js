const path = require("path");

module.exports = {
    entry: "./src/main.ts",

    output: {
        path: path.join(__dirname),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },

    resolve: {
        extensions: [".js", ".ts"]
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: path.join(__dirname, "src"),
                loader: "ts-loader"
            },
            {
                test: /.css$/,
                loader: 'style-loader!css-loader!sass-loader'
              }
        ]
    },

    devServer: {
        contentBase: "./"
    }
};
