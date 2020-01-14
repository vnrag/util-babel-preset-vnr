module.exports = (api, options = {}) => {
    const {
        modules = false,
        targets,
        useBuiltIns = 'usage',
        corejs = {
            version: 3,
            proposals: true
        },
        include = ['es.array.iterator', 'es.promise', 'es.object.assign', 'es.promise.finally']
    } = options;

    const presets = [
        [
            '@babel/env',
            {
                modules,
                targets,
                useBuiltIns,
                corejs,
                include
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
