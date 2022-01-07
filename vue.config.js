module.exports = {
    pages: {
        'index': './src/pages/Home/main.js',
        'about': './src/pages/About/main.js',
        'admin': './src/pages/Admin/main.js',
        'admin/products': './src/pages/Admin/Products/main.js',
        'admin/orders': './src/pages/Admin/Orders/main.js'
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "./src/assets/styles/app.scss";`,
            },
        },
    },
}