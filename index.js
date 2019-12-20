module.exports = {
    presets: [
        [
            '@babel/env',
            {
                useBuiltIns: 'entry',
                corejs: {
                    version: 3,
                    proposals: true
                }
            }
        ],
        '@babel/typescript',
        '@babel/react'
    ],
    plugins: [
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
        '@babel/syntax-dynamic-import',
        '@babel/transform-react-jsx'
    ]
};
