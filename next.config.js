module.exports = {
    future: {
        webpack5: true,
    },
    images: {
        domains: ['mdbootstrap.com'],
    },
    basePath: '',

    loader: 'css-loader',

    // options: {
    //     modules: {
    //         localIdentName: '[name]_[local]_[hash:base64:6]',
    //         exportLocalsConvention: 'camelCase'
    //     }
    // }

    // cssLoaderOptions: {
    //     modules: {
    //         exportLocalsConvention: 'camelCaseOnly'
    //     }
    // }


    // webpack: (config) => {
    //     const rules = config.module.rules
    //         .find((rule) => typeof rule.oneOf === "object")
    //         .oneOf.filter((rule) => Array.isArray(rule.use));
    //     rules.forEach((rule) => {
    //
    //         rule.use.forEach((moduleLoader) => {
    //             if (
    //                 moduleLoader.loader.includes("css-loader/dist") &&
    //                 typeof moduleLoader.options.modules === "object"
    //             ) {
    //                 moduleLoader.options = {
    //                     ...moduleLoader.options,
    //                     modules: {
    //                         ...moduleLoader.options.modules,
    //                         exportLocalsConvention: "camelCase", // https://github.com/webpack-contrib/css-loader#exportlocalsconvention
    //                     },
    //                 };
    //             }
    //         });
    //     });
    //
    //     return config;
    // },
}