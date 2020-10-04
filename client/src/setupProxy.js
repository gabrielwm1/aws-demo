const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  //  "/api/*"
  app.use(
    ["/api", "/auth/google", "api/*"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
    // [("/api", "/api/*")],
    // createProxyMiddleware({
    //   target: "http://localhost:5000",
    // })
  );
};
