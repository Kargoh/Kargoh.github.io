module.exports = {
    pages: {
        'index': './src/pages/Home/main.js',
        'about': './src/pages/About/main.js',
        'products': './src/pages/Products/main.js',
        'products/product': './src/pages/Products/Product/main.js',
        'admin': './src/pages/Admin/main.js',
        'admin/orders': './src/pages/Admin/Orders/main.js',
        'admin/orders/order': './src/pages/Admin/Orders/Order/main.js',
        'admin/products': './src/pages/Admin/Products/main.js',
        'admin/products/product': './src/pages/Admin/Products/Product/main.js'
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "./src/assets/styles/app.scss";`,
            },
        },
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/cooldown-gaming/'
    : '/'
}