module.exports = {
    entry: './js/main.jsx',
    output: {
        filename: './dest/index.js'
    },
    module: {
        loaders: [
            // 
            {
                test:/\.jsx$/,
                loader: 'babel-loader',
                query:{
                    presets: ['react']
                }
            },
            // sass家在即
            {
                test:/\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
}