module.exports = {
    future: {
        webpack5: true,
    },
    images: {
        domains: ['mdbootstrap.com'],
    },
    webpack5: (config) => {
        const rules = config.module.rules
            .find((rule) => typeof rule.oneOf === "object")
            .oneOf.filter((rule) => Array.isArray(rule.use));

        rules.forEach((rule) => {
            rule.use.forEach((moduleLoader) => {
                if (
                    moduleLoader.loader.includes("css-loader/dist") &&
                    typeof moduleLoader.options.modules === "object"
                ) {
                    moduleLoader.options = {
                        ...moduleLoader.options,
                        modules: {
                            ...moduleLoader.options.modules,
                            exportLocalsConvention: "camelCase", // https://github.com/webpack-contrib/css-loader#exportlocalsconvention
                        },
                    };
                }
            });
        });

        return config;
    },
}