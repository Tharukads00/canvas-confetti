const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins:[
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ], externals:{
        lodash: '_'
    }, 
    mode : 'production'
}