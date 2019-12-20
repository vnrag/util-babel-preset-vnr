module.exports = (api, options = {}) => {
    const {
        targets,
        useBuiltIns = 'entry',
        corejs = {
            version: 3,
            proposals: true
        }
    } = options;

    const presets = [
        [
            '@babel/env',
            {
                targets,
                useBuiltIns,
                corejs
            }
        ],
        '@babel/typescript',
        '@babel/react'
    ];

    const plugins = [
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
        '@babel/syntax-dynamic-import',
        '@babel/transform-react-jsx'
    ];

    return {
        presets: presets,
        plugins: plugins
    };
};
