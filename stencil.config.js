// https://stenciljs.com/docs/config

exports.config = {
  globalStyle: "src/global/app.css",
  outputTargets: [
    {
      type: "www",
      serviceWorker: false
    }
  ]
};
