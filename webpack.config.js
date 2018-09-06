const path = require('path')
module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'lib')
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [ ".webpack.js",".json", ".web.js", ".ts", ".tsx", ".js"]
    },
    'mode': 'development',
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,

                use: [{
                    loader: 'awesome-typescript-loader'
                }],

                enforce: 'post'
            }
        ],

        rules: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.ts$/,

                use: [{
                    loader: 'awesome-typescript-loader'
                }],

                enforce: 'pre'
            }
        ]
    },

    // Other options...
};