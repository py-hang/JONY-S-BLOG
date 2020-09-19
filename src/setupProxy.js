const { createProxyMiddleware  } = require('http-proxy-middleware');
const express = require('express');
const app = express();

module.exports = function(app) {
    app.use(process.env.REACT_APP_BASE_URL, createProxyMiddleware({ target: process.env.REACT_APP_URL, changeOrigin: true }));
    app.listen(3000);
    // cookieDomainRewrite: "http://localhost:3000"
};
