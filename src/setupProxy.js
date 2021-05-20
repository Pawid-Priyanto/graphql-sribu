const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/graphql",
    createProxyMiddleware({
      target: "https://n7b67.sse.codesandbox.io/",
      changeOrigin: true
    })
  );
};