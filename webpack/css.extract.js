const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function (paths) {
    return {
        module: {
            rules: [{
                test: /\.(css|scss)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './static',
                            minimize: true
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: './css/[name].css'
            })
        ],
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin({})
            ]
        }
    };
};