const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('auth/register',
        {
          target:'https://citibike-api.vercel.app/api',
          changeOrigin: true  
        })
    )
}