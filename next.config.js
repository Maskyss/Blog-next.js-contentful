const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');

module.exports = withPlugins([
    [
        {
            webpack: (config) => {
                config.module.rules.push({
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                        },
                    },
                });
                config.module.rules.push({
                    test: /\.svg$/,
                    use: 'file-loader',
                });
                // Fixes npm packages that depend on `fs` module
                config.node = {
                    fs: 'empty',
                };

                return config;
            },
        },
    ],
    [
        withSass,
        {
            cssModules: true,
            cssLoaderOptions: {
                localIdentName: '[folder]_[local]___[hash:base64:5]',
            },
        },
    ],
]);
