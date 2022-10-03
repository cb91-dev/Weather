module.exports = (api) => {
  api.cache(true)
  return {
    "env": {
      "development": {
        "plugins": [
          "nativewind/babel",
        ]
      }
    },
    presets: ['babel-preset-expo']
  }
}