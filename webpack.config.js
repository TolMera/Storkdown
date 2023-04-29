// @ts-ignore
const path = require('path');

module.exports = {
    entry: './build/index.js',
    output: {
        filename: 'bundle.js',
        // @ts-ignore
        path: path.resolve(__dirname, 'dist'),
    },
    mode: "production",
};
