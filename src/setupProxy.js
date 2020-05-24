const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        'v2/top-headlines?country=ar&apiKey=9e2bcf98ed624677902cc1e037fe9109',
        createProxyMiddleware({
            target: "https://newsapi.org/",
            changeOrigin: true,
            secure: false,
        })
    );
};